
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
            res.status(200).json({success: true, data: payload.$push.stickey});

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

            res.status(200).json({success: true});

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

            // const project = await projectModel.findOne({_id: _id});
            
            // const index = project.stickey.findIndex((note) => {
            //     return note._id === stickeyId
            // })
            // console.log(index);

            // if(!project.stickey[index].request.includes(userName)){
            //     project.request.push();
            //     await project.save();

            //     res.status(200).json({success: true});
            // } else {
            //     throw 'Request already Made'
            // }

            await projectModel.findOneAndUpdate({_id: _id, 'stickey._id': stickeyId}, payload);
            res.status(200).json({success: true});

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
            
            const {_id} = req.user.project;
            const {stickeyId, userName} = req.body;

            const payload = {
                $pull: {
                    'stickey.$.request': userName
                }
            }
            await projectModel.findOneAndUpdate({_id: _id, 'stickey._id': stickeyId}, payload);

            res.status(200).json({success: true});

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
            res.status(200).json({success: true});

        }
        catch(err) {
            console.log(err);
            res.status(500).json({ success: false, message: "Server Err" })
        }

    }

}
