const route = require('express').Router()
const projectMiddleware = require('../middlewares/project.mid');
const sharedMiddleware = require('../middlewares/shared.mid')
const $role = require('../../config/config').role;
const dirMid = require('../middlewares/directory.mid')

route.get('/get/find/:name/:searchText', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.findFile);

route.get('/get/:name/:dirId', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.get_dir);
route.get('/get/file/:name/:fileId', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.get_file);

route.post('/update/dir', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.update_dir, projectMiddleware.projectLogs);
route.post('/update/file', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true) , dirMid.update_file, projectMiddleware.projectLogs);

route.post('/post', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true) , dirMid.post, projectMiddleware.projectLogs);

route.post('/delete', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), dirMid.delete_dir, projectMiddleware.projectLogs);
route.post('/delete/file', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true), dirMid.delete_file, projectMiddleware.projectLogs);




module.exports = route;
