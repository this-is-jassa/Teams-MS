const route = require('express').Router()
const projectMiddleware = require('../middlewares/project.mid');
const sharedMiddleware = require('../middlewares/shared.mid');
const stickeyMiddleware = require('../middlewares/projectStickey.mid');
const $role = require('../../config/config').role;


/**

* @ROUTE GET /get

* @DESC Get your project

* @Access Only members can access it

*/

route.get('/get/:name', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) ,projectMiddleware.get);

/**

* @ROUTE GET 

* @DESC Get your project logs

* @Access Only members can access it

*/
route.get('/:name/logs', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true) ,projectMiddleware.getLogs);




/**

* @ROUTE POST /post

* @DESC post your project

* @Access ALL users can access it.

*/
route.post('/post', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.post);
route.post('/post/member', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.addMember); 



/**

* @ROUTE UPDATE /update

* @DESC Update main details of the project

* @Access Owners can access it

*/
route.post('/update', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER], true), projectMiddleware.update);
route.post('/update/member/status', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), projectMiddleware.updateMemberStatus )


/**

* @ROUTE UPDATE /update/stickey/request

* @DESC Make a task complete request

* @Access Only developers can access it.

*/
// route.post('/update/stickey/request', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.DEVELOPER], true), projectMiddleware.update_stickey_req); // D


/**

* @ROUTE UPDATE /update/stickey

* @DESC Make a task complete request

* @Access Only developers can access it.

*/
// route.post('/update/stickey', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.update_stickey_req); // D
route.post('/update/member', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.updateMember); 



/**

* @ROUTE DELETE /delete

* @DESC Delete your project

* @Access Owners can access it

*/
route.post('/delete', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER], true), projectMiddleware.delete);

route.post('/delete/notifications', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER], true), projectMiddleware.deleteLogs);



/**

* @ROUTE DELETE /detele/stickey

* @DESC Delete a stickey note

* @Access Owners & Admin can access it

*/
// route.post('/detele/stickey', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), projectMiddleware.update_stickey_req); // D
route.post('/delete/member', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.deleteMember); 



/**

* @ROUTE UPDATE /quit

* @DESC Delete a stickey note

* @Access Owners & Admin can access it

*/
route.post('/quit', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.DEVELOPER], true), projectMiddleware.quit); // D


/**

* @ROUTE UPDATE /quit

* @DESC Make changes to the project Stickes

* @Access Owners & Admin can access it

*/

route.post('/stickey/post', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), stickeyMiddleware.post); // D
route.post('/stickey/update', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), stickeyMiddleware.update); // D
route.post('/stickey/update/request', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.DEVELOPER], true), stickeyMiddleware.crossOff_req); // D

route.post('/stickey/delete/request', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), stickeyMiddleware.crossOff_req_cancel); // D

route.post('/stickey/delete', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), stickeyMiddleware.delete); // D

/**

* @ROUTE GET 

* @DESC get the project Stickes

* @Access Owners & Admin & developers can access it

*/
route.get('/:name/stickey', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), stickeyMiddleware.get); // D


module.exports = route;
