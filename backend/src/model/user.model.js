const mongo = require('mongoose');
const types = mongo.Schema.Types;
const bcrypt = require('bcrypt');

const userSchema = mongo.Schema({
    userName: {
        type: types.String,
        index: { unique: true, dropDups: true },       
        minlength: 1,
        maxlength: [16, 'Length of user must less than 17'],
        trim: true,
        required: [true, 'User name is required']
    },
    password: {
        type: types.String,
        required: [true, "Password is requuired"],
        minlength: [8, 'Minimum length of password should be 8'],
        maxlength: [16, 'Password should not be longer than 16 characters'],
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
        maxlength: [300, 'Length of the bio should be more than 300']
    },
    lastActive: {
        type: types.Date,
        default: Date.now()
    },
    timeStamp: {
        type: types.Date,
        default: Date.now()
    },
    avatar: {type: types.Number, default: 0 },
    following: [{type: types.ObjectId, ref: 'users'}],
    followers: [{type: types.ObjectId, ref: 'users'}],
    personalNotes: [
        {
            _id: {type: types.ObjectId},
            name: {type: types.String, minlength: 1, maxlength: 16, required: true} ,
            message: {type: types.String, minlength:1, maxlength: [100, 'Max length of cannot be greater than 100']},
            crossOff: { type: types.Boolean, default: false, required: false },
            timeStamp: {type: types.Date, default: Date.now()},
        }
    ],
    projects: [{type: types.ObjectId, ref: 'projects'}],
    notify: [ 
        {
            type: {type: types.String, enum: ['Note', 'Project', 'Follow']},
            message: {type: types.String},
            timeStamp: {type: types.Date, default: Date.now()},
        }
     ]
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