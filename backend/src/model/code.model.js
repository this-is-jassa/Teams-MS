const mongo = require('mongoose')
const types = mongo.Schema.Types;

const codeSchema = mongo.Schema({
    projectId: {type: types.ObjectId, ref: 'projects'},
    code: {type: types.String, required: true, maxlength: [100000, 'Length of user must less than 100001']},
});

module.exports = mongo.model('code', codeSchema);
