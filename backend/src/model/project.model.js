const mongo = require('mongoose');
const types = mongo.Schema.Types;

const projectSchema = mongo.Schema({
    name: {
        type: types.String, 
        minlength:1, 
        maxlength: [16,'Maximum length of name should be 16'], 
        trim: true,
        index: { unique: true, dropDups: true },       
        required: [true, 'User name is required']
    },              // A, O
    discription: {
        type: types.String,
        required: true,
        maxlength: [300, 'Maximum length of the discription is 300']
    },              // A, O
    private: {
        type: types.Boolean,
        default: true
    },
    freeze: { 
        isFreeze:{type: types.Boolean, default: false}, 
        timeStamp: {type: types.Date, default: Date.now()} 
    },

    startingDate: {
        type: types.String
    },
    endingDate: {
        type: types.String
    },

    members: [{ 
        name: {type: types.String, required: true, maxlength: 16, minlength: 1},
        permission: {type: types.String, default: "Developer", enum: ['Owner', 'Admin', 'Developer']},
        status: {
            value: {type: types.String,default: 'Do Not Disturb' ,enum: ['Working', 'Break', 'Do Not Disturb'] }, 
            timeStamp: {type: types.Date, default: Date.now()} 

        }
    }],           // O, A, D( Delete: private )

    dir: {
        type: types.ObjectId,
        required: true
    },

    timeStamp: {
        type: types.Date,
        default: Date.now()
    },
    
    stickey: [
        {
            _id: {type: types.ObjectId},
            group: {
                type: types.String,
                minlength: 1,
                maxlength: [30, 'Maximum length of name should be 30']
            },              // A, O
            name: {
                type: types.String,
                minlength: 1,
                maxlength: 30, 
                trim: true
            },              // A, O
            message: {
                type: types.String,
                minlength: 1,
                maxlength: [100, 'Maximum length of message should be 100']
            },              // A, O
            timeStamp: {
                type: types.Date,
                default: Date.now()
            },
            request: {      // D
                type : types.Boolean,
                default: false
            },
            crossOff: {     // A, O
                type: types.Boolean,
                required: true,
                default: false
            }     // A, O
        }
    ]
});

// projectSchema.pre('save', function(next){
//     const project = this;
//     project.name = project.name.replace(' ','-');
//     next();
// });

module.exports =  mongo.model('projects', projectSchema);



