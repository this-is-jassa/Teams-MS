const userModel = require('../model/user.model')
const mongoose = require('mongoose');

module.exports = {

    post: (req, res, next) => {
        const {userName} = req.user;
        const {name, message} = req.body;
        const objectId = mongoose.Types.ObjectId();

        const payload = {
            $push: {
                personalNotes: {
                    _id: objectId,
                    name: name,
                    message: message,
                    crossOff: false,
                    timeStamp: new Date()
                }
            }
        };

        userModel.findOneAndUpdate(
            {userName: userName },
            payload,
            (err, user) => {
                if(err) {res.status(500).json({success: false, msg:"Server side error"}); console.error(err) ;return}
                
                res.status(200).json({success: true, data: payload.$push.personalNotes});
                next();
            });
    },

    get: (req, res, next) => {
        
        const {userName} = req.user;
        const skip = 0;
        const limit = 50;

        userModel.findOne(
            {userName: userName}, 
            {personalNotes: {$slice: [skip, limit]}}
        )
        .select("personalNotes")
        .exec((err, result) => {
            if(err) {res.status(500).json({success: false, msg: 'Server Error'}); console.error(err); return}
            
            res.status(200).json({success: true, data: result });
            next();
        })
    },


     update: async (req, res, next) => {
        const {userName} = req.user;
        const {name, message, id, crossOff} = req.body;

        
        const updateReq = await userModel.findOneAndUpdate(
            {userName: userName, 'personalNotes._id': id},
            {
                $set: {
                    'personalNotes.$.name': name,
                    'personalNotes.$.message': message,
                    'personalNotes.$.crossOff': crossOff
                }
            }
        )
        
        res.status(200).json({success: true});
       
    },

    delete: (req,res,next) => {

        const {userName} = req.user;
        const {id} = req.body;

        userModel.findOneAndUpdate(
            {userName: userName},
            {
                $pull: { 
                    personalNotes: {
                        _id: id
                    }
                }
            },
            {useFindAndModify: false},
            (err, result) => {
                if(err) {res.status(500).json({success: false, msg: 'Server Error'}); return}
                
                res.status(200).json({success: true})
            }
        )
    }

}
