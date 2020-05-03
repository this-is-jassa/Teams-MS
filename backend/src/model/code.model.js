const mongo = require('mongoose')
const types = mongo.Schema.Types;

const code = mongo.Schema({
    text: {type: types.String, maxlength: [100000]}
})

module.exports = mongo.model('code', code);
