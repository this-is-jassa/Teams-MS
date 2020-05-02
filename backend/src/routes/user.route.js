const route = require('express').Router();
const verifyUser = require('../middlewares/shared.mid').checkTokenAndSetUser;
const userMiddleware = require('../middlewares/user.middleware');

/**

* @ROUTE GET /get

* @DESC Get user's own profile

* @Access Only user can acccess its own 

*/
route.get('/get', verifyUser, userMiddleware.get);


/**

* @ROUTE UPDATE /get

* @DESC Follow a user

* @Access Only user can acccess its own 

*/
route.get('/follow', verifyUser, userMiddleware.follow_user);


/**

* @ROUTE GET /search

* @DESC find users

* @Access All can access it.

*/
route.get('/search/:userName', userMiddleware.search);



/**

* @ROUTE UPDATE /get

* @DESC Unfollow a user

* @Access Only user can acccess its own 

*/
route.post('/unfollow', verifyUser, userMiddleware.unfollow_user);


/**

* @ROUTE GET /get

* @DESC get Following 

* @Access All Authorised users can access any's

*/
route.get('/get/following/:userName', verifyUser, userMiddleware.getFollowers);


module.exports = route;
