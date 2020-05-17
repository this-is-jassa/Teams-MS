const projectModel = require('../model/project.model');
const userModel = require('../model/user.model');
const directoryModel = require('../model/directory.model');
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

            res.status(200).json({success: true, data: project, role: req.role});
           
        
        
        }
        catch(err) {
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
                filetype: 'dir',
                text: '',
                child: []
            };
    
            const newProject = projectModel.create(payload);
            const newDir = directoryModel.create(dirPayload);
    
        
    
            userModel.findOneAndUpdate({ userName: userName }, userPayload, { useFindAndModify: false }, (err, response3) => {});

            Promise
            .resolve([newProject, newDir])
            .then(response => {
                res.status(200).json({ success: true, data: name });
            });

        }
        catch(err) {
            console.log(err); res.status(500).json({ success: false, msg: "Saving Error" });
        }

    },



    update: (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }


        const { userName } = req.user;
        const { name, discription, private, isFreeze } = req.body;


        const payload = {

            discription: discription,
            private: private,
            freeze: {
                isFreeze: isFreeze,
                timeStamp: new Date.now()
            }
        };

        projectModel.findOneAndUpdate({ name: name }, payload, (err, response) => {

            if (err) { res.status(500).json({ success: false, msg: "Saving Error" }); return };

            res.status(200).json({ success: true });
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
            const { name } = req.user.project;
            const { value } = req.body;

            if(req.user.project.freeze.isFreeze){throw 'Account is Freeze'}

            const payload = {
                $set: {
                    'members.$.status.value': value
                }
            }

            await projectModel.findOneAndUpdate({ name: name, 'members.name': userName }, payload);
            res.status(200).json({ success: true });


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

        if(req.user.project.freeze.isFreeze){ throw 'Account is Freeze'}


        const { userName } = req.user;
        const { _id } = req.user.project;
        const { member, name } = req.body;

        console.log(userName + ' ' + _id + ' ' + member + ' ' + name);

        let IsMemberAlreadyExist = () => {

            const projectmembers = req.user.project.members;

            for (const item of projectmembers) {

                if (item.name === member.name) { return true; }
            }
            return false;

        }


        if (!!member.name && member.name !== userName && member.permission !== 'Owner' && !IsMemberAlreadyExist()) {

            const payload = {
                $push: {
                    projects: _id,
                    notify: { type: 'Project', message: 'You are added to a project ' + name + 'by' + userName },
                    newNotify: true
                }
            };


            console.log(member.name + ' - ' + name);

            userModel.findOneAndUpdate({ userName: member.name }, payload, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }
            });

            projectModel.findOneAndUpdate({ name: name }, { $push: { members: { name: member.name, permission: member.permission, status: {} } } }, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }

                res.status(200).json({ success: true });
            });

        } else {
            res.status(500).json({ success: false, message: "Member Details not valid" })
        }

    },



    deleteMember: (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
        if(req.user.project.freeze.isFreeze){ throw 'Account is Freeze'}


        const { userName } = req.user;
        const { _id } = req.user.project;
        const { memberName, name } = req.body;


        if (member.name !== userName && member.permission !== 'Owner') {
            const payload = {
                $pull: { projects: _id },
                $push: { notify: { type: 'Project', message: 'You are removed from the project ' + name } }
            };

            userModel.findOneAndUpdate({ userName: memberName }, payload, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }
            });

            projectModel.findOneAndUpdate({ name: name }, { $pull: { members: { name: memberName } } }, (err, response) => {
                if (err) { res.status(500).json({ success: false }); console.log(err); return; }

                res.status(200).json({ success: true });
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

        if(req.user.project.freeze.isFreeze){ throw 'Account is Freeze'}


        const { userName } = req.user;
        const { member, name } = req.body;

        if (member.name !== userName && member.permission !== 'Owner') {

            const payload = {
                $set: {
                    'members.$.permission': member.permission
                }
            }

            projectModel.findOneAndUpdate({ name: name, 'members.name': member.name }, payload, (err, response) => {
                if (err) { console.log(err); res.status(500).json({ success: false, msg: err }); return; }

            });

            userModel.findOneAndUpdate({ userName: member.name }, { $push: { notify: { type: 'Project', message: ('Your role of project ' + name + 'has been changed to ' + member.permission) } }, newNotify: true },
                { useFindAndModify: false }, (err, response) => {
                    if (err) { console.error(err); res.status(500).json({ success: false, msg: err }); return; }
                    res.status(200).json({ success: true });
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

        if(req.user.project.freeze.isFreeze){ throw 'Account is Freeze'}


        const { UserName } = req.user;
        const { name } = req.user.project;

        userModel.findOneAndUpdate({ UserName: UserName }, { $pull: { projects: { name: name } } }, (err, response) => {
            if (err) { console.log(err); return; };

        })

        projectModel.deleteOne({ name: name }, (err, response) => {
            if (err) { res.status(500).json({ success: false, msg: "Saving Error" }); return };

            res.status(200).json({ success: true });

        });


        // Delete the Directory now
    },



    quit: async (req, res, next) => {
        
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
        
        try {
            const {_id} = req.user.project;
            const {userName} = req.user;

            const update1 = {
                $pull: { projects: _id },
            }
            const update2 = { 
                $pull: { members: { name: userName } } 
            }

            const updateUser = userModel.findOneAndUpdate({userName: userName}, update1);
            const updateProject = projectModel.findOneAndUpdate({_id: _id}, update2);

            const result = await Promise.all([updateUser, updateProject]);

            res.status(200).json({success: true});
        }
        catch (err) {
            console.log(err);
            res.status(400).json({success: false, message: 'Server Error'});

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
                const name  = (req.method === 'GET')? req.params.name:  req.body.name;


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
