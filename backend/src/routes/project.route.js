const route = require('express').Router()
const projectMiddleware = require('../middlewares/project.mid');
const sharedMiddleware = require('../middlewares/shared.mid');
const stickeyMiddleware = require('../middlewares/projectStickey.mid');
const $role = require('../../config/config').role;


/**

* @ROUTE GET /get

* @DESC Get a perticular project

* @Access Only members can access it

*/

route.get('/get/:name', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) ,projectMiddleware.get);


/**

* @ROUTE GET /:userName

* @DESC Get all of the public projects of a user and all projects of its own

* @Access Only members can access it

*/

route.get('/:userName', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.getAll);



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
route.post('/post', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.post, projectMiddleware.projectLogs);
route.post('/post/member', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.addMember, projectMiddleware.projectLogs); 



/**

* @ROUTE UPDATE /update

* @DESC Update main details of the project

* @Access Owners can access it

*/
route.post('/update', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER], true), projectMiddleware.update, projectMiddleware.projectLogs);
route.post('/update/member/status', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), projectMiddleware.updateMemberStatus, projectMiddleware.projectLogs );


/**

* @ROUTE DELETE /delete

* @DESC delete project

* @Access Only Owner can access it.

*/

route.post('/delete', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER], true), projectMiddleware.delete );



/**

* @ROUTE UPDATE /update/stickey

* @DESC Make a task complete request

* @Access Only developers can access it.

*/
// route.post('/update/stickey', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.update_stickey_req); // D
route.post('/update/member', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER], true), projectMiddleware.updateMember, projectMiddleware.projectLogs); 




route.post('/delete/notifications', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER], true), projectMiddleware.deleteLogs, projectMiddleware.projectLogs);



/**

* @ROUTE DELETE /detele/stickey

* @DESC Delete a stickey note

* @Access Owners & Admin can access it

*/
// route.post('/detele/stickey', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), projectMiddleware.update_stickey_req); // D
route.post('/delete/member', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.OWNER], true), projectMiddleware.deleteMember, projectMiddleware.projectLogs); 



/**

* @ROUTE UPDATE /quit

* @DESC Delete a stickey note

* @Access Owners & Admin can access it

*/
route.post('/quit', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ADMIN, $role.DEVELOPER], true), projectMiddleware.quit, projectMiddleware.projectLogs); // D


/**

* @ROUTE UPDATE /quit

* @DESC Make changes to the project Stickes

* @Access Owners & Admin can access it

*/

route.post('/stickey/post', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), stickeyMiddleware.post, projectMiddleware.projectLogs); // D
route.post('/stickey/update', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), stickeyMiddleware.update, projectMiddleware.projectLogs); // D
route.post('/stickey/update/request', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.DEVELOPER], true), stickeyMiddleware.crossOff_req, projectMiddleware.projectLogs); // D

route.post('/stickey/delete/request', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), stickeyMiddleware.crossOff_req_cancel, projectMiddleware.projectLogs); // D

route.post('/stickey/delete', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.OWNER, $role.ADMIN], true), stickeyMiddleware.delete, projectMiddleware.projectLogs); // D

/**

* @ROUTE GET 

* @DESC get the project Stickes

* @Access Owners & Admin & developers can access it

*/
route.get('/:name/stickey', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), stickeyMiddleware.get); // D


module.exports = route;
