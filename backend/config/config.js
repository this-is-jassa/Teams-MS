var admin = require('firebase-admin');
const serviceAccount = require('./drops-70b54-firebase-adminsdk-73k2l-f36759f679.json')

module.exports=
{
    "mongoURI": "mongodb+srv://jassa:jassa662@mycluster-74vit.mongodb.net/test?retryWrites=true&w=majority",
    "jwtSecretKey": "oxc1w32*#*eancloudis12heredjk@(*Js221autherdeep",
    "role": {
        OWNER: 'Owner',
        ADMIN: 'Admin',
        DEVELOPER: 'Developer',
        ALL: 'ALL'
    },
    admin: () => {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://drops-70b54.firebaseio.com"
        });
        return admin;
    }
}