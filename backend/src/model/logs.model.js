
const mongo = require('mongoose');
const types = mongo.Schema.Types;

mongo.set('runValidators', true);


const logSchema = mongo.Schema({
        user: {type: types.ObjectId, ref: 'user'},
        ipAddress: {type: types.String},
        ipsAddress: {type: types.Array},
        hostName: {type: types.String},
        method: {type: types.String},
        baseUrl: {type: types.String},
        path: {type: types.String},
        params: {type: types.Mixed},
        query: {type: types.Mixed},
        timestamps: { type: types.Date, default: Date.now },
        comment: { type: types.String },
      },
      {minimize: false }
    );

module.exports = mongo.model('logs', logSchema);
    