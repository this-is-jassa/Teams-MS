const route = require('express').Router();
const middleware = require('../middlewares/personalNotes');
const {checkTokenAndSetUser} = require('../middlewares/shared.mid')
const $role = require('../../config/config').role;


/**

* @ROUTE UPDATE /api/personalnotes/post

* @DESC Post your personal note

* @Access All users can access it  

*/


route.post('/post', checkTokenAndSetUser, middleware.post);


/**

* @ROUTE GET /api/personalnotes/get

* @DESC Get all of your personal note

* @Access ALl users can get there own personal routes ** IF The Project is public **

*/

route.get('/get',checkTokenAndSetUser, middleware.get);



/**

* @ROUTE UPDATE /api/personalnotes

* @DESC Update a note

* @Access All users can update there own personal notes 

*/

route.post('/update',checkTokenAndSetUser, middleware.update);



/**

* @ROUTE DELETE /api/personalnotes

* @DESC Delete a note

* @Access All users can access there own data

*/

route.post('/delete',checkTokenAndSetUser, middleware.delete);


/**

* @ROUTE UPDATE /api/personalnotes/quit

* @DESC Remove myself from project  

* @Access All users can access there own data

*/

// route.post('/quit', checkTokenAndSetUser, middleware.quit );


module.exports = route;
