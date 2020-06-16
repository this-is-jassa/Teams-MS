const route = require('express').Router();
const verifyUser = require('../middlewares/shared.mid').checkTokenAndSetUser;
const userMiddleware = require('../middlewares/user.middleware');

/**

* @ROUTE GET /get

* @DESC Get user's own profile

* @Access Only user can acccess its own 

*/
route.get('/get', verifyUser, userMiddleware.get);
route.get('/get/:userName', verifyUser ,userMiddleware.getUser);

/**

* @ROUTE UPDATE /get

* @DESC Follow a user

* @Access Only user can acccess its own 

*/
route.post('/follow', verifyUser, userMiddleware.follow_user);


/**

* @ROUTE GET /search

* @DESC find users

* @Access All can access it.

*/
route.get('/search/:text', userMiddleware.search);



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
route.get('/following/:userName', verifyUser, userMiddleware.getFollowing);
route.get('/followers/:userName', verifyUser, userMiddleware.getFollowers);

route.get('/isFollowing/:userId', verifyUser, userMiddleware.isFollowing);



route.post('/update', verifyUser, userMiddleware.update);
route.post('/update/notifySeen', verifyUser, userMiddleware.NotifySeen);


module.exports = route;
