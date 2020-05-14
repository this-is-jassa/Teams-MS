
const projectModel = require('../model/project.model');
const userModel = require('../model/user.model');
const mongo = require('mongoose');

module.exports = {
    
    get: async (req, res, next) => {
        console.log('reached')
        
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
            const {group, name, message} = req.body;
            const stickeyId = mongo.Types.ObjectId();

            const payload = {
                $push: {
                    stickey: {
                        _id: stickeyId,
                        group: group,
                        name: name,
                        message: message
                    }
                }
            }

            await projectModel.findOneAndUpdate({_id: _id}, payload);
            res.status(200).json({success: true, data: {_id: stickeyId}});

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
            const {stickeyId, group, name, message, request, crossOff} = req.body;

            const payload = {
                $set: {
                    'stickey.$.group': group,
                    'stickey.$.name': name,
                    'stickey.$.message': message,
                    'stickey.$.crossOff': crossOff,
                    'stickey.$.request': request,
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
                    _id: stickeyId
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
