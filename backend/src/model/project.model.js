const mongo = require('mongoose');
const types = mongo.Schema.Types;

mongo.set('runValidators', true);


const members = new mongo.Schema({ 
    name: {type: types.String, required: true, maxlength: 20, minlength: 1},
    permission: {type: types.String, default: "Developer", enum: ['Owner', 'Admin', 'Developer']},
    avatar: {type: types.Number, default: Math.floor(Math.random()*10) },
    status: {
        value: {type: types.String, default: 'Do Not Disturb' ,enum: ['Working', 'Break', 'Do Not Disturb'] }, 
        timeStamp: {type: types.Date, default: Date.now()} 
    }
});

const stickey = new mongo.Schema({
    _id: {type: types.ObjectId},
    group: {
        type: types.String,
        minlength: 1,
        maxlength: [50, 'Maximum length of name should be 50']
    },              // A, O
    name: {
        type: types.String,
        minlength: 1,
        maxlength: 50, 
        trim: true
    },              // A, O
    message: {
        type: types.String,
        minlength: 1,
        maxlength: [400, 'Maximum length of message should be 400']
    },              // A, O
    timeStamp: {
        type: types.Date,
        default: Date.now()
    },
    request: [      // D
        types.String
    ],
    crossOff: {     // A, O
        type: types.Boolean,
        required: true,
        default: false
    }     // A, O
});



const projectSchema = mongo.Schema({
    name: {
        type: types.String, 
        minlength:1, 
        maxlength: [30,'Maximum length of name should be 30'], 
        trim: true,
        index: { unique: true, dropDups: true },       
        required: [true, 'User name is required']
    },              // A, O
    discription: {
        type: types.String,
        required: false,
        maxlength: [400, 'Maximum length of the discription is 400']
    },              // A, O
    private: {
        type: types.Boolean,
        default: true
    },
    freeze: { 
        isFreeze:{type: types.Boolean, default: false}, 
        timeStamp: {type: types.Date, default: Date.now()} 
    },

    endingDate: {
        type: types.String,
        default: Date.now()
    },

    members: [members],           // O, A, D( Delete: private )

    dir: {
        type: types.ObjectId,
        required: true
    },

    timeStamp: {
        type: types.Date,
        default: Date.now()
    },
    
    stickey: [stickey]
});



module.exports =  mongo.model('projects', projectSchema);



