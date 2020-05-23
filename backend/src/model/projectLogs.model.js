const mongo = require('mongoose');

const types = mongo.Schema.Types;

mongo.set('runValidators', true);


const schema = mongo.Schema({
    projectId: {
        type: types.ObjectId,
        ref: 'projects',
        required: true
    },
    type: {
        type: types.String,
        enum: ['NewFile', 'NewMember', 'NewNote',  'DeleteMember', 'EditDir', 'EditFile', 'EditNote', 'Job', 'Project', 'Delete', 'Dir' ],
        required: true

    },
    message: {
        type: types.String,
        maxlength: [100, 'Max length of message should be less than 100'],
        required: true

    },
    timeStamp: {
        type: types.Date,
        default: Date.now()
    }
})

module.exports = mongo.model('projectLogs', schema);
