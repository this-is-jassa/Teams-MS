const route = require('express').Router()
const projectMiddleware = require('../middlewares/project.mid');
const sharedMiddleware = require('../middlewares/shared.mid')
const $role = require('../../config/config').role;
const dirMid = require('../middlewares/directory.mid')

route.get('/get/:name/:dirId', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.get_dir);
route.get('/get/find/:name/:searchText', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.findFile);
route.post('/update/dir', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.update_dir);
route.post('/post', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true) , dirMid.post);


route.get('/get/file/:name/:fileId', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], false) , dirMid.get_file);
route.post('/update/file', sharedMiddleware.checkTokenAndSetUser, projectMiddleware.permissions([$role.ALL], true) , dirMid.update_file);




module.exports = route;
