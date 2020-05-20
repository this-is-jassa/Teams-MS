const jwt = require('jsonwebtoken');
const config = require('../../config/config.js');
const admin = require('firebase-admin');
const logs_project = require('../model/projectLogs.model');

module.exports = {

    checkTokenAndSetUser: (req, res, next) => {

        // const secret = config.jwtSecretKey;
        const token = req.header("xauthtoken");

        if (!token) { res.status(500).json({ success: false, "msg": "Access denied, No token provided." }); return; }


        admin.auth().verifyIdToken(token)
            .then((decodedToken) => {

                let uid = decodedToken.uid;
                req.user = { userName: uid };
                next();

            })
            .catch((error) => {

                req.user = null;
                console.error(error)
                next();

            });

    },

    activateRoute: (req, res, next) => {
        res.status(200).send(!!req.user);
    },

    projectLogs: async (req, res, next) => {

        try {

            if (!req.user.permission) {
                res.status(400).json({ success: false, msg: "Permission Not granted" });
                return;
            }

            const {_id} = req.user.project;
            const {type, message} = req.user.project.log;
            const {data} = req.res | '';

            const logPayload = {
                projectId: _id,
                type: type,
                message: message,
                timeStamp: Date.now()
            }

            const log = await logs_project.create(logPayload);
            res.status(200).json({log: log, data: data, success: true});

        }
        catch (err) {
            console.log(err);
            res.status(200).json({success: false, message: 'Server Err'});

        }
    }

}
