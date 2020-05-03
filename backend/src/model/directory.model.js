const mongo = require('mongoose')
const types = mongo.Schema.Types;

const dirSchema = mongo.Schema({
    name: {type: types.String, required: true, maxlength: [16, 'Length of user must less than 17'], minlength: [1, 'Length should be greater than 1'],},
    filetype: {type: types.String, required: true, enum: ['.js','.php','.java', '.txt', '.html', '.scss', '.sass', '.css', '.ts', '.c', '.cpp', '.py', 'directory']},
    text: {type: types.ObjectId, ref: 'code'},
    content: [
        types.Mixed
    ]
});

module.exports = dirSchema;
