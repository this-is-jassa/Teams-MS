
const projectModel = require('../model/project.model');
const userModel = require('../model/user.model');
const mongo = require('mongoose');

module.exports = {
    
    get: async (req, res, next) => {
        
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const {_id} = req.user.project;

            const stickey = await projectModel.findOne({_id: _id}, ['stickey']);
            res.status(200).json({success: true, data: stickey});
            
        }
        catch(err) {
            console.log(err);
            res.status(400).json({ success: false, message: "Server Err" })
        }
    },

    post: async (req, res, next) => {
        
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            
            const {_id} = req.user.project;
            const {userName} = req.user;
            const {group, stickeyName, message, crossOff} = req.body;
            const stickeyId = mongo.Types.ObjectId();

            const payload = {
                $push: {
                    stickey: {
                        _id: stickeyId,
                        group: group,
                        name: stickeyName,
                        message: message,
                        crossOff: crossOff,
                        request: []
                    }
                }
            }

            await projectModel.findOneAndUpdate({_id: _id}, payload);

            req.projectLog = {
                type: 'NewNote',
                message: `${userName} added a new task to group ${group}`,
            }

            req.data = payload.$push.stickey;
            next();

            // res.status(200).json({success: true, data: payload.$push.stickey});

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ success: false, message: "Server Err" })

        }
    },

    update: async (req, res, next) => {
        
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            
            const {_id} = req.user.project;
            const {userName} = req.user;
            const {stickeyId, group, stickeyName, message, crossOff} = req.body;

            const payload = {
                $set: {
                    'stickey.$.group': group,
                    'stickey.$.name': stickeyName,
                    'stickey.$.message': message,
                    'stickey.$.crossOff': crossOff,
                    'stickey.$.request': [],

                }
            }
            await projectModel.findOneAndUpdate({_id: _id, 'stickey._id': stickeyId}, payload);

            req.projectLog = {
                type: 'EditNote',
                message: `${userName} updated a task in group: ${group}`,
            }
            next();

            // res.status(200).json({success: true});

        }
        catch(err) {
            console.log(err);
            res.status(500).json({ success: false, message: "Server Err" })
        }
    },

    crossOff_req: async (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            
            const {userName} = req.user;
            const {_id} = req.user.project;
            const {stickeyId} = req.body;

            const payload = {
                $addToSet: {
                    'stickey.$.request': userName
                }
            }

            await projectModel.findOneAndUpdate({_id: _id, 'stickey._id': stickeyId}, payload);
            
            

            

            var group = req.user.project.stickey.find(item => {
                return item._id === stickeyId;
            });

            console.log(group);


            req.projectLog = {
                type: 'Job',
                message: `${userName} claimed job done in a task of group ${group}`,
            }
            next();



        }
        catch(err) {
            console.log(err);
            res.status(500).json({ success: false, message: "Server Err" })
        }
    },

    // Anyone can manipulate and delete his coluge's name as well
    crossOff_req_cancel: async (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            
            const {_id, name} = req.user.project;
            const {stickeyId, userName} = req.body;

            const payload = {
                $pull: {
                    'stickey.$.request': userName
                }
            }
            
            await projectModel.findOneAndUpdate({_id: _id, 'stickey._id': stickeyId}, payload);
   
            const {group} = req.user.project.stickey.find(item => {
                
                return item._id == stickeyId;
            });

            await userModel.findOneAndUpdate({userName: userName}, {$push: {notify: {type: 'Job', message: `Your Job claim for project ${name} has been denied by ${req.user.userName} from a task group ${group}` }}});


            req.projectLog = {
                type: 'Job',
                message: `${req.user.userName} denied ${userName}'s job claim in group ${group}`,
            }

            next();
            // res.status(200).json({success: true});

        }
        catch(err) {
            console.log(err);
            res.status(500).json({ success: false, message: "Server Err" })
        }
    },

    delete: async (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try{

            const {_id} = req.user.project;
            const {stickeyId} = req.body;

            const payload = {
                $pull: {
                    stickey: {
                        _id: stickeyId
                    }
                }
            }

            await projectModel.findOneAndUpdate({_id: _id}, payload);
            
            const {group} = req.user.project.stickey.find(item => {
                return item._id === stickeyId;
            });

            req.projectLog = {
                type: 'Delete',
                message: `${req.user.userName} deleted a task from group ${group}`,
            }
            next();

            // res.status(200).json({success: true});

        }
        catch(err) {
            console.log(err);
            res.status(500).json({ success: false, message: "Server Err" })
        }

    }

}
