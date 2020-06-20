const userModel = require('../model/user.model');
const projectModel = require('../model/project.model');

module.exports = {
    get: async (req, res, next) => {

        try {
            const { userName } = req.user;
            if(!!!userName){throw 'Validation Error . '}

            const user = await userModel.findOne({ userName: userName })
            .select("userName projects notify bio avatar lastActive _id")
            .slice('notify', -40)
            .populate({
                path: 'projects',
                model: 'projects',
                select: 'name freeze members endingDate'
            })

            res.status(200).json({ success: true, data: user });
            next();
            
        } catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); 
        }
    },

    update: async (req, res) => {
        
        try {
            
            const {bio, avatar} = req.body;
            const {_id} = req.user;

            await userModel.findOneAndUpdate({_id: _id}, {bio: bio, avatar: avatar});
            res.status(200).json({success: true});
            

        } catch(err) {
            res.status(500).json({ success: false, message: 'Cannot update user' }); console.error(err);
        }
    },

    getUser: async(req, res, next) => {

        const {userName} = req.params;
        const user = await userModel.findOne({userName: userName}).select('userName _id bio lastActive avatar');
        res.status(200).json({data: user});
    },
    
    search: async (req, res, next) => {
        try{
            
            const  where = {
                userName: {
                    $regex: '^' + req.params.text
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
                    notify: {
                        type: 'Follow',
                        message: userName + ' just stared following you.'
                    }
                }
            }

            const startedFollowing = userModel.findOneAndUpdate({_id: _id}, payload1);
            const getFollowed = userModel.findOneAndUpdate({_id: userId}, payload2);
            
            await Promise.all([startedFollowing,getFollowed])

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
            const a = userModel.findOneAndUpdate({_id: _id}, payload1);
            const b = userModel.findOneAndUpdate({_id: userId}, payload2);

            await Promise.all([a,b])
          
            res.status(200).json({success: true});
        }
        catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },

    getFollowing: async (req, res, next) => {
        try{
            const { userName } = req.params;
            const skip = 0;
            const limit = 20;
        

            const following = userModel.findOne({userName: userName})
            .slice('following', -40)
            .select('following')
            .populate({
                path: 'following',
                model: 'users',
                select: 'userName _id avatar lastActive'
            });

            const length = userModel.aggregate([{$match: {userName: userName}}, {$project: {following: {$size: '$following'}}}]);
            
            const result = await Promise.all([following, length]);
            
 
            res.status(200).json({success: true, data: result[0], length: result[1][0].following});

        }
        catch(err) {
            res.status(500).json({ success: false, message: 'Cannot fetch user' }); console.error(err);
        }
    },

    getFollowers: async (req, res, next) => {
        try{
            const {userName} = req.params;

            const followers = userModel.findOne({userName: userName})
            .slice('followers', -40)
            .select('followers')
            .populate({
                path: 'followers',
                model: 'users',
                select: 'userName _id avatar lastActive'
            });

            const length = userModel.aggregate([{$match: {userName: userName}}, {$project: {followers: {$size: '$followers'}}}]);

            const result = await Promise.all([followers, length]);
            

            res.status(200).json({data: result[0], length: result[1][0].followers});


        } catch(err) {
            console.log(err);
            res.status(400).json({success: false});
        }
    },

    isFollowing: async (req, res, next) => {
        const {userName} = req.user;
        const {userId} = req.params;

        const isFollowing = await userModel.findOne({userName: userName, following: userId});
        
        res.status(200).json({data: !!isFollowing});
    },

    NotifySeen: async (req, res, next) => {

        try {
            const {userName} = req.user;

            const deleteNot = await userModel.findOneAndUpdate({userName: userName}, {notify: []});
    
            res.status(200).json({success: true});
        } catch (err) {
            res.status(400).json({success: false});
            console.log(err);
        }

    }



}
