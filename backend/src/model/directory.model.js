const mongo = require('mongoose')
const types = mongo.Schema.Types;

const dirSchema = mongo.Schema({
    projectId: { type: types.ObjectId, ref: 'projects' },

    name: { type: types.String, required: true, maxlength: [16, 'Length of user must less than 17'], minlength: [1, 'Length should be greater than 1'], },
    fileType: { type: types.String, required: true, enum: ['.js', '.php', '.java', '.txt', '.html', '.scss', '.sass', '.css', '.ts', '.c', '.cpp', '.py', 'dir'] },
    text: { type: types.String },
    child: [
        types.ObjectId
    ]

});

module.exports = mongo.model('directory', dirSchema);
