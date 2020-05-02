const route = require('express').Router();
const authMiddleware = require('../middlewares/auth.mid');
const sharedMiddleware = require('../middlewares/shared.mid');

route.post('/login', authMiddleware.login);
route.post('/register', authMiddleware.register);
route.post('/activateroute', sharedMiddleware.checkTokenAndSetUser, sharedMiddleware.activateRoute);

module.exports = route;
