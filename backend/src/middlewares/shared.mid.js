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

    

}
