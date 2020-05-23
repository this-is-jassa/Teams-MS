const userModel = require('../model/user.model');
const projectModel = require('../model/project.model');

module.exports = {
    get: async (req, res, next) => {

        try {
            const { userName } = req.user;

            const user = await userModel.findOne({ userName: userName })
            .select("userName projects notify avatar")
            .populate({
                path: 'projects',
                model: 'projects',
                select: 'name freeze members endingDate'
            })

            res.status(200).json({ success: true, data: user });
            next();
            
        } catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },
    
    search: async (req, res, next) => {
        try{
            
            const  where = {
                userName: {
                    $regex: '^' + req.params.userName
                }
            } 
            
            const users = await userModel.find(where).select("userName avatar _id").limit(10);

            res.status(200).json(users);

        }
        catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },

    follow_user: async (req, res, next) => {
        try{
            const {_id, userName} = req.user;
            const userId = req.body._id;

            const payload1 = {
                $addToSet: {
                    following: userId
                }
            }

            const payload2 = {
                $addToSet: {
                    followers: _id
                },
                $push: {
                    type: 'Follow',
                    message: userName + 'just stared following you'
                }
            }

            const startedFollowing = await userModel.findOneAndUpdate({_id: _id}, payload1);
            const getFollowed = await userModel.findOneAndUpdate({_id: userId}, payload2);
            
            res.status(200).json({success: true});
        }
        catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },

    unfollow_user: async (req, res, next) => {
        try {
            const {_id} = req.user;
            const userId = req.body._id;

            const payload1 = {
                $pull: {
                    following: userId
                }
            }
            const payload2 = {
                $pull: {
                    followers: _id
                }
            }
            await userModel.findOneAndUpdate({_id: _id}, payload1);
            await userModel.findOneAndUpdate({_id: userId}, payload2);

            res.status(200).json({success: true});
        }
        catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },

    getFollowers: async (req, res, next) => {
        try{
            const {userName} = req.params;
            const skip = 0;
            const limit = 20;

            const following = await userModel.findOne({userName: userName})
            .select('following')
            .populate({
                path: 'following',
                model: 'users',
                select: 'userName _id avatar'
            })

            

            res.status(200).json({success: true, data: following});

        }
        catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },

    NotifySeen: async (req, res, next) => {

        try {
            const {userName} = req.user;

            console.log(userName );
            const deleteNot = await userModel.findOneAndUpdate({userName: userName}, {notify: []});
    
            res.status(200).json({success: true});
        } catch (err) {
            res.status(400).json({success: false});
            console.log(err);
        }

    }



}
