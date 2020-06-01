const mongo = require('mongoose')
const types = mongo.Schema.Types;

mongo.set('runValidators', true);

const codeSchema = mongo.Schema({
    projectId: {type: types.ObjectId, ref: 'projects'},
    code: {type: types.String, default:"", maxlength: [200000, 'Length of user must less than 200000']},
});

module.exports = mongo.model('code', codeSchema);
