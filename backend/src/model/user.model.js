const mongo = require('mongoose');
const types = mongo.Schema.Types;
const bcrypt = require('bcrypt');

mongo.set('runValidators', true);

const personalNotesSchema = new mongo.Schema({
    _id: {type: types.ObjectId, required: true},
    name: {type: types.String, required: true, trim: true, minlength: 1, maxlength: 50} ,
    message: {type: types.String, required: true, trim: true, minlength: 1, maxlength: 400},
    crossOff: { type: types.Boolean, default: false, required: false },
    timeStamp: {type: types.Date, default: Date.now()},
}) 

const userSchema = mongo.Schema({
    userName: {
        type: types.String,
        index: { unique: true, dropDups: true },       
        minlength: 1,
        maxlength: [20, 'Length of user must less than 17'],
        trim: true,
        required: [true, 'User name is required']
    },
    password: {
        type: types.String,
        required: [true, "Password is requuired"],
        minlength: [8, 'Minimum length of password should be 8'],
        maxlength: [40, 'Password should not be longer than 40 characters'],
    },
    email: {
        type: types.String,
        default: '',
        required: false
    },
    bio: {
        type: types.String,
        default: '',
        required: false,
        maxlength: [400, 'Length of the bio should be more than 300']
    },
    lastActive: {
        type: types.Date,
        default: Date.now()
    },
    timeStamp: {
        type: types.Date,
        default: Date.now()
    },
    avatar: {type: types.Number, default: Math.floor(Math.random()*10) },
    following: [{type: types.ObjectId, ref: 'users'}],
    followers: [{type: types.ObjectId, ref: 'users'}],
    personalNotes: [personalNotesSchema],
    projects: [{type: types.ObjectId, ref: 'projects'}],
    notify: [ 
        {
            type: {type: types.String, enum: ['Project', 'Follow', 'Job']},
            message: {type: types.String},
            timeStamp: {type: types.Date, default: Date.now()},
        }
     ],
    
});

userSchema.pre('save', function(next) {
    let user = this;

    // if(!user.isModified('password')) return next();
    user.userName = user.userName.replace(' ', '-');
    
    bcrypt.genSalt(15, (err, salt)=> {
        if(err){ console.error(err) ;return };
        
        bcrypt.hash(user.password, salt, (err, newPass)=> {
            if(err){ console.error(err) ;return };
            user.password = newPass;
            next();
        });
    });
});

function checkLength(text, len) {
    try{
        const leng = text.trim().length;
        return  leng <= len && leng !== 0
    }catch (err) {
        return false
    }
}

userSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text); // Assuming email has a text attribute
 }, 'The e-mail field cannot be verlidated.')

userSchema.methods.comparePassword = function(plainPass, cb) {
    bcrypt.compare(plainPass, this.password, (err, isMatch)=> {
        if(err) return cb(err, false);
        cb(null, isMatch);
    })
};

module.exports = mongo.model('users', userSchema);