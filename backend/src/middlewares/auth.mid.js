const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const privateKey = require('../../config/config.js').jwtSecretKey;
var admin = require('../../config/config').admin();

module.exports = {

    login: async (req, res, next) => {

        const { userName, password } = req.body;

        userModel.findOne({ userName: userName }, (err, user) => {
            if (err) { console.error(err); res.status(500).json(err); return };

            if(user) {
                user.comparePassword(password, (err, isMatch) => {
                    if (err) { console.error(err); res.status(500).json(err); return };
                    if (!isMatch) { res.status(200).json({msg: "Password is incorrect " }); return };
    

                    admin.auth().createCustomToken(user.userName)
                                .then(customToken => {

                                    res.status(200).json({success: true ,token: customToken});
                                    next();
                                })
                                .catch(error => {
                                    res.status(500).json(error); console.error(error);
                                });
    
                });
            }else {
                 res.status(200).json({msg: "User not found " }) ;
            }

        });
    },

    register: async (req, res, next) => {

        const { userName, password, avatar } = req.body;

        const newUser = new userModel({
            userName: userName,
            password: password,
            avatar: avatar,
        });

        newUser.save((err, user) => {
            if (err) { console.error(err); res.status(500).json(err); return; }

            user.password = "";

            admin.auth().createCustomToken(user.userName)
            .then(customToken => {

                res.status(200).json({success: true ,token: customToken});
                next();
            })
            .catch(error => {
                res.status(500).json(error); console.error(error);
            });

        });

    }
}
