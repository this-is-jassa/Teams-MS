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

    timeStamp: {
        type: types.Date,
        default: Date.now()
    },
    directoryStructure: [{
        name: {type: types.String, required: true},
        type: {required: true, enum:['directory','txt', 'mp3', 'mp4', 'png', 'jpg', 'svg'], type: types.String},
        access: [types.String],
        children: [types.Mixed]
    }],              // Depends
    stickey: [
        {
            group: {
                type: types.String,
                minlength: 1,
                maxlength: [16, 'Maximum length of name should be 16']
            },              // A, O
            name: {
                type: types.String,
                minlength: 1,
                maxlength: 16, trim: true
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
                type: types.String
            },
            crossOff: {     // A, O
                type: types.Boolean,
                required: true,
                default: false
            },
            users: [types.String]       // A, O
        }
    ]
});

projectSchema.pre('save', function(next){
    const project = this;
    project.name = project.name.replace(' ','-');
    next();
});

module.exports =  mongo.model('projects', projectSchema);




//********* */

// {
//     "path": "photos",
//     "name": "photos",
//     "size": 600,
//     "type": "directory",
//     "children": [
//       {
//         "path": "photos/summer",
//         "name": "summer",
//         "size": 400,
//         "type": "directory",
//         "children": [
//           {
//             "path": "photos/summer/june",
//             "name": "june",
//             "size": 400,
//             "type": "directory",
//             "children": [
//               {
//                 "path": "photos/summer/june/windsurf.jpg",
//                 "name": "windsurf.jpg",
//                 "size": 400,
//                 "type": "file",
//                 "extension": ".jpg"
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "path": "photos/winter",
//         "name": "winter",
//         "size": 200,
//         "type": "directory",
//         "children": [
//           {
//             "path": "photos/winter/january",
//             "name": "january",
//             "size": 200,
//             "type": "directory",
//             "children": [
//               {
//                 "path": "photos/winter/january/ski.png",
//                 "name": "ski.png",
//                 "size": 100,
//                 "type": "file",
//                 "extension": ".png"
//               },
//               {
//                 "path": "photos/winter/january/snowboard.jpg",
//                 "name": "snowboard.jpg",
//                 "size": 100,
//                 "type": "file",
//                 "extension": ".jpg"
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }