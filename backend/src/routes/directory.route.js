const route = require('express').Router()
const projectMiddleware = require('../middlewares/project.mid');
const sharedMiddleware = require('../middlewares/shared.mid')
const $role = require('../../config/config').role;


/**

* @ROUTE UPDATE /get

* @DESC Get your project

* @Access Only members can access it

*/

route.get('/get/directory', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) ,projectMiddleware.get);



/**

* @ROUTE POST /post

* @DESC post your project

* @Access ALL users can access it.

*/
route.post('/post', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.post);
route.post('/post/member', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.addMember); 



module.exports = route;
