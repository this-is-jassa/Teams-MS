
const projectModel = require('../model/project.model');
const userModel = require('../model/user.model');
const directoryModel = require('../model/directory.model');
const projectLog = require('../model/projectLogs.model');

const mongo = require('mongoose');
// standard request - GET- params.name & - POST- body.name

module.exports = {

    get: async (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { name } = req.params;

            const project = await projectModel.findOne({ name: name })
                .select('-stickey');

            res.status(200).json({ success: true, data: project, role: req.role });

        }
        catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Err' });
        }


    }, // O, A, D

    search: async (req, res, next) => {
        try {

            const where = {
                userName: {
                    $regex: '^' + req.params.userName
                }
            }

            const users = await userModel.find(where).select("userName avatar _id").limit(10);

            res.status(200).json(users);

        }
        catch (err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },

    post: async (req, res, next) => {

        if (req.user === null) { console.log("Not Authorised"); res.status(500).json({ success: false, msg: "Not Authorised" }); return }

        try {

            const { userName } = req.user;
            const { discription, private, isFreeze, startingDate, endingDate } = req.body;
            let name = req.body.name;
            name = name.trim().split(' ').join('-')


            const projectId = mongo.Types.ObjectId();
            const dirId = mongo.Types.ObjectId();

            const payload = {
                _id: projectId,
                name: name,
                discription: discription,
                private: private,
                freeze: {
                    isFreeze: isFreeze
                },
                startingDate: startingDate,
                endingDate: endingDate,
                members: { name: userName, permission: 'Owner' },
                dir: dirId
            };

            const userPayload = {
                $push: { projects: projectId },
            };

            const dirPayload = {
                _id: dirId,
                projectId: projectId,
                name: name,
                fileType: 'dir',
                text: '',
                child: []
            };

            const logPayload = {
                projectId: projectId,
                type: 'Project',
                message: 'Congrats! New project has been created',
                timeStamp: Date.now()
            }

            await directoryModel.create(dirPayload);
            const newProject = projectModel.create(payload);
            const log = projectLog.create(logPayload)


            userModel.findOneAndUpdate({ userName: userName }, userPayload, { useFindAndModify: false }, (err, response3) => { });

            await Promise.all([newProject, log])

            res.status(200).json({ success: true, data: name, log: logPayload });

        }
        catch (err) {
            console.log(err); res.status(500).json({ success: false, msg: "Saving Error" });
        }

    },



    update: (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }


        const { _id } = req.user.project;
        const { userName } = req.user;
        const { name, discription, private, isFreeze } = req.body;


        const payload = {

            discription: discription,
            private: private,
            freeze: {
                isFreeze: isFreeze,
                timeStamp: Date.now()
            }
        };


        projectModel.findOneAndUpdate({ name: name }, payload, (err, response) => {

            if (err) { res.status(500).json({ success: false, msg: "Saving Error" }); return };

            const logPayload = {
                projectId: _id,
                type: 'Project',
                message: `Project settings has been changed by ${userName}`
            }

            projectLog.create(logPayload, (err, notification) => {
                res.status(200).json({ success: true, log: notification });
                next();

            });

        })
    },

    updateMemberStatus: async (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { userName } = req.user;
            const { _id } = req.user.project;
            const { value } = req.body;

            if (req.user.project.freeze.isFreeze) { throw 'Account is Freeze' }

            const payload = {
                $set: {
                    'members.$.status.value': value
                }
            }

            const logPayload = {
                projectId: _id,
                type: 'Project',
                message: ` ${userName} has changed its status to ${value} `,
                timeStamp: Date.now()
            }

            const updateProj = projectModel.findOneAndUpdate({ name: _id, 'members.name': userName }, payload);
            const log = projectLog.create(logPayload)

            await Promise.all([updateProj, log])
            res.status(200).json({ success: true, log: logPayload });

        }
        catch (e) {
            console.log(e);
            res.status(500).json({ success: false, msg: "Saving Error" });
        }

    },


    addMember: (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        if (req.user.project.freeze.isFreeze) { throw 'Account is Freeze' }


        const { userName } = req.user;
        const { _id } = req.user.project;
        const { member, name } = req.body;

        console.log(userName + ' ' + _id + ' ' + member + ' ' + name);

        let IsMemberAlreadyExist = false


        const projectmembers = req.user.project.members;
        console.log(projectmembers);

        for (const item of projectmembers) {
            console.log(item.name + ' ' + member.name)
            if (item.name === member.name) { IsMemberAlreadyExist = true; break; }
        }


        console.log(IsMemberAlreadyExist);


        if (!!member.name && (member.name !== userName) && (member.permission !== 'Owner') && !(IsMemberAlreadyExist)) {

            const payload = {
                $push: {
                    projects: _id,
                    notify: { type: 'Project', message: 'You are added to a project ' + name + 'by' + userName },
                    newNotify: true
                }
            };

            const logPayload = {
                projectId: _id,
                type: 'NewMember',
                message: ` ${userName} has added ${member} to the team`
            }

            userModel.findOneAndUpdate({ userName: member.name }, payload, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }
            });

            projectModel.findOneAndUpdate({ name: name }, { $addToSet: { members: { name: member.name, permission: member.permission, status: {} } } }, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }

            });

            projectLog.create(logPayload, (err, log) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }
                res.status(200).json({ success: true, log: log });
            })


        } else {
            res.status(200).json({ success: false, message: "Member Details not valid" })
        }

    },



    deleteMember: (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
        if (req.user.project.freeze.isFreeze) { throw 'Account is Freeze' }


        const { userName } = req.user;
        const { _id } = req.user.project;
        const { memberName, name } = req.body;


        if (member.name !== userName && member.permission !== 'Owner') {

            const payload = {
                $pull: { projects: _id },
                $push: { notify: { type: 'Project', message: 'You are removed from the project ' + name } }
            };
            const logPayload = {
                projectId: _id,
                type: 'DeleteMember',
                message: ` ${userName} has deleted ${member} from the team`
            };



            projectModel.findOneAndUpdate({ name: name }, { $pull: { members: { name: memberName } } }, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }

                userModel.findOneAndUpdate({ userName: memberName }, payload, (err, response2) => {
                    if (err) { res.status(500).json({ success: false }); console.log(err); return; }

                    projectLog.create(logPayload, (err, log) => {
                        if (err) { res.status(500).json({ success: false }); console.log(err); return; }
                        res.status(200).json({ success: true, log: log });
                    });
                });
            });



        } else {
            res.status(500).json({ success: false, message: "Member Details not valid" })
        }

    },



    updateMember: (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        if (req.user.project.freeze.isFreeze) { throw 'Account is Freeze' }

        const { _id } = req.user.project;
        const { userName } = req.user;
        const { member, name } = req.body;

        if (member.name !== userName && member.permission !== 'Owner') {

            const payload = {
                $set: {
                    'members.$.permission': member.permission
                }
            };

            const logPayload = {
                projectId: _id,
                type: 'EditMember',
                message: ` ${userName} changed the permission of ${member} to ${member.permission}`
            };

            projectModel.findOneAndUpdate({ name: name, 'members.name': member.name }, payload, (err, response) => {
                if (err) { console.log(err); res.status(500).json({ success: false, msg: err }); return; }

                userModel.findOneAndUpdate({ userName: member.name }, { $push: { notify: { type: 'Project', message: ('Your role for project ' + name + 'has been changed to ' + member.permission) } }, newNotify: true },
                    { useFindAndModify: false }, (err, response) => {
                        if (err) { console.error(err); res.status(500).json({ success: false, msg: err }); return; }

                        projectLog.create(logPayload, (err, log) => {
                            if (err) { res.status(500).json({ success: false }); console.log(err); return; }
                            res.status(200).json({ success: true, log: log });
                        });
                    });


            });


        } else {
            res.status(500).json({ success: false, message: "Member Details not valid" })
        }

    },



    delete: (req, res, next) => {


        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        if (req.user.project.freeze.isFreeze) { throw 'Account is Freeze' }


        const { UserName } = req.user;
        const { name, _id } = req.user.project;

        userModel.findOneAndUpdate({ UserName: UserName }, { $pull: { projects: { name: name } } }, (err, response) => {
            if (err) { console.log(err); return; };

        })

        projectModel.deleteOne({ name: name }, (err, response) => {
            if (err) { res.status(500).json({ success: false, msg: "Saving Error" }); return };

            projectLog.deleteMany({ projectId: _id }, (err, done) => {
                if (err) { res.status(500).json({ success: false, msg: "Saving Error" }); return };

                res.status(200).json({ success: true });
            })

        });

        // Delete the Directory now
    },



    quit: async (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { _id } = req.user.project;
            const { userName } = req.user;

            const update1 = {
                $pull: { projects: _id },
            }
            const update2 = {
                $pull: { members: { name: userName } }
            }

            const logPayload = {
                projectId: _id,
                type: 'DeleteMember',
                message: `${member} quit the team`,
                timeStamp: Date.now()
            };

            const updateUser = userModel.findOneAndUpdate({ userName: userName }, update1);
            const updateProject = projectModel.findOneAndUpdate({ _id: _id }, update2);

            const result = await Promise.all([updateUser, updateProject]);

            res.status(200).json({ success: true });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' });

        }

    },

    getLogs: async (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {

            const { _id } = req.user.project;
            const limit = 50;
            const logs = await projectLog.find({ projectId: _id }).sort('descending').limit(limit);

            res.status(200).json({ success: true, data: logs });

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' });
        }

    },

    deleteLogs: async (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        const { _id } = req.user.project;

        await projectLog.deleteMany({ projectId: _id });
        res.status(200).json({ success: true });

    },



    // ***** Always use After sharedMiddleware.checkTokenAndSetUser 
    permissions: function ($role, $overRidePrivate) {
        return (req, res, next) => {

            if (req.user === null || req.user === 'undefined') {
                res.status(500).json({ success: false });
            }

            else {
                const { userName } = req.user;
                const name = (req.method === 'GET') ? req.params.name : req.body.name;


                projectModel.findOne({ name: name })
                    .select("_id private name members")
                    .exec((err, response) => {
                        if (err || response === null) { res.status(400).json({ success: false, message: "Error Loading Projects" }); console.log(err); return; }

                        req.user.project = response;

                        const member = response.members.find(function (item) {
                            return item.name === userName;
                        });

                        if (response.private || $overRidePrivate) { // FOR GET REQUEST


                            // member = response.members.find(function (item) {
                            //     return item.name === userName;
                            // });

                            if (!!member && ($role.includes('ALL') || $role.includes(member.permission))) {
                                req.user.permission = true;

                                req.role = member.permission;

                            } else {
                                req.user.permission = false;
                            }
                        } else {
                            req.user.permission = true;

                            req.role = member.permission;

                        }

                        next();
                    });
            }
        }
    }


}
