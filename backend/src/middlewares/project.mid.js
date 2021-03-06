
const projectModel = require('../model/project.model');
const userModel = require('../model/user.model');
const directoryModel = require('../model/directory.model');
const projectLog = require('../model/projectLogs.model');
const fileModel = require('../model/code.model');

const mongo = require('mongoose');
// standard request - GET- params.name & - POST- body.name

module.exports = {


    getAll: async (req, res, next) => {
        
        const myName = req.user.userName;
        const {userName} = req.params;
        
        let where = {
            "members.name": userName
        }
        
        if(myName !== userName) {
            where.private = false
        }

        const projects = await projectModel.find(where).select("members discription name _id timeStamp endingDate dir")

        res.status(200).json(projects);

    },

    get: async (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { name } = req.params;

            const project = await projectModel.findOne({ name: name })
                .select('-stickey');

            res.status(200).json({ success: true, data: project, userInProject: req.userInProject });

        }
        catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Err' });
        }


    }, // O, A, D


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

            await directoryModel.create(dirPayload);
            await projectModel.create(payload);
            await userModel.findOneAndUpdate({ userName: userName }, userPayload);

            req.projectLog = {
                type: 'Project',
                message: 'Congrats! New project has been created',
            }

            req.user.project = { _id: projectId };
            req.data = name;

            next();

        }
        catch (err) {
            console.log(err); res.status(500).json({ success: false, msg: "Saving Error" });
        }

    },


    delete: async (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { _id, members, name } = req.user.project;
            const { userName } = req.user;

            console.log(typeof _id)

            const deleteLogs = projectLog.deleteMany({ projectId: _id });
            const deleteDir = directoryModel.deleteMany({ projectId: _id });
            const deleteFiles = fileModel.deleteMany({ projectId: _id });

            await Promise.all([deleteLogs, deleteDir, deleteFiles]);

            let deleteMembers = [];

            for (const member of members) {
                let payload1 = {
                    $pull: {
                        projects: _id
                    },
                    $push: {
                        notify: {
                            type: 'Project',
                            message: `${userName} deleted project ${name}`
                        }
                    }
                }
                deleteMembers.push(userModel.findOneAndUpdate({ userName: member.name }, payload1));
            }
            await Promise.all(deleteMembers);

            await projectModel.deleteOne({ _id: _id });


            res.status(200).json({ success: true });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error Occured deleting project' });
        }

    },


    update: (req, res, next) => {


        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }



        const { userName } = req.user;
        const { name, discription, private, isFreeze, endingDate } = req.body;

        const payload = {

            discription: discription,
            private: private,
            freeze: {
                isFreeze: isFreeze,
                timeStamp: Date.now()
            },
            endingDate: endingDate
        };


        projectModel.findOneAndUpdate({ name: name }, payload, (err, response) => {

            if (err) { res.status(500).json({ success: false, msg: "Saving Error" }); return };



            req.projectLog = {
                type: 'Project',
                message: `Project settings has been changed by ${userName}`,
            }

            next();



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
            const { value, avatar } = req.body;

            // if (req.user.project.freeze.isFreeze) { throw 'Account is Freeze' }
            let payload = {
                $set: {}
            }
            let logMessage = {
                type: 'Project',
                message: '',
            }
            
            if(avatar !== undefined) {
                payload.$set['members.$.avatar'] = avatar;
                logMessage.message = ` ${userName} changed his avatar`;
            }

            if(value !== undefined) {
                payload.$set['members.$.status.value'] = value;
                logMessage.message = ` ${userName} changed its status to ${value} `;
            }
   


            await projectModel.findOneAndUpdate({ _id: _id, 'members.name': userName }, payload);

            req.projectLog = {
                type: 'Project',
                message: ` ${userName} has changed its status to ${value} `,
            }
            next();


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


        let IsMemberAlreadyExist = false


        const projectmembers = req.user.project.members;


        for (const item of projectmembers) {
            if (item.name === member.name) { IsMemberAlreadyExist = true; break; }
        }


        if (IsMemberAlreadyExist) {
            res.status(400).json({ success: false, message: 'User already exist' })
            return;
        }


        if (!!member.name && (member.name !== userName) && (member.permission !== 'Owner')) {

            const payload = {
                $push: {
                    projects: _id,
                    notify: { type: 'Project', message: 'You are added to a project ' + name + ' by ' + userName },

                }
            };

            const projectpayload = {
                $addToSet: {
                    members: {
                        name: member.name,
                        permission: member.permission,
                        status: {}
                    }
                }
            }



            userModel.findOneAndUpdate({ userName: member.name }, payload, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }
            });

            projectModel.findOneAndUpdate({ name: name }, projectpayload, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }

            });

            req.projectLog = {
                type: 'NewMember',
                message: ` ${userName} has added ${member.name} to the team`,
            }
            next();


        } else {
            res.status(200).json({ success: false, message: "Member Details not valid" })
        }

    },



    deleteMember: (req, res, next) => {

        // if (req.user.project.freeze.isFreeze) { throw 'Account is Freeze' }


        const { userName } = req.user;
        const { _id, members } = req.user.project;
        const { memberName, name } = req.body;

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        const member = members.find(member => {
            return member.name === memberName;
        });


        if (member.permission !== 'Owner') {

            const payload = {
                $pull: { projects: _id },
                $push: { notify: { type: 'Project', message: 'You are removed from the project ' + name } }
            };



            projectModel.findOneAndUpdate({ name: name }, { $pull: { members: { name: memberName } } }, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }

                userModel.findOneAndUpdate({ userName: memberName }, payload, (err, response2) => {
                    if (err) { res.status(500).json({ success: false }); console.log(err); return; }

                    req.projectLog = {
                        type: 'DeleteMember',
                        message: ` ${userName} has deleted ${memberName} from the team`,
                    }
                    next();

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

        const { userName } = req.user;
        const { member, name } = req.body;

        if (member.name !== userName && member.permission !== 'Owner') {

            const payload = {
                $set: {
                    'members.$.permission': member.permission
                }
            };


            projectModel.findOneAndUpdate({ name: name, 'members.name': member.name }, payload, (err, response) => {
                if (err) { console.log(err); res.status(500).json({ success: false, msg: err }); return; }

                userModel.findOneAndUpdate({ userName: member.name }, { $push: { notify: { type: 'Project', message: ('Your role for project ' + name + ' has been changed to ' + member.permission) } }, newNotify: true },
                    { useFindAndModify: false }, (err, response) => {
                        if (err) { console.error(err); res.status(500).json({ success: false, msg: err }); return; }

                        req.projectLog = {
                            type: 'EditMember',
                            message: ` ${userName} changed the permission of ${member} to ${member.permission}`,
                        };

                        next();

                    });


            });


        } else {
            res.status(500).json({ success: false, message: "Member Details not valid" })
        }

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



            const updateUser = userModel.findOneAndUpdate({ userName: userName }, update1);
            const updateProject = projectModel.findOneAndUpdate({ _id: _id }, update2);

            const result = await Promise.all([updateUser, updateProject]);

            req.projectLog = {
                type: 'DeleteMember',
                message: `${userName} quit the team`,
            }
            next();

            // res.status(200).json({ success: true });
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
            const logs = await projectLog.find({ projectId: _id }).sort({ 'timeStamp': -1 }).limit(limit);

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

        try {
            const { _id } = req.user.project;
            const { userName } = req.user;

            await projectLog.deleteMany({ projectId: _id });

            req.projectLog = {
                type: 'Delete',
                message: `${userName} removed all logs.`,
            }
            next();

        } catch (err) {
            res.status(400).json({ success: false, message: "Server Error" })
        }

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
                    .select("_id private name members stickey freeze")
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

                                // Will be using req.locals soon .. OOps

                                req.user.permission = true;

                                req.userInProject = member;

                            } else {
                                req.user.permission = false;
                            }
                        } else {
                            req.user.permission = true;

                            req.userInProject = member;

                        }

                        next();
                    });
            }
        }
    },
    projectLogs: async (req, res, next) => {

        try {


            const { _id } = req.user.project;
            const { type, message } = req.projectLog;
            const data = req.data;


            const logPayload = {
                projectId: _id,
                type: type,
                message: message,
                timeStamp: Date.now()
            }

            const log = await projectLog.create(logPayload);
            res.status(200).json({ log: log, data: data, success: true });

        }
        catch (err) {
            console.log(err);
            res.status(200).json({ success: false, message: 'Server Err' });

        }
    }

}
