const projectModel = require('../model/project.model');
const directoryModel = require('../model/directory.model');
const codeModel = require('../model/code.model');

module.exports = {
    get_directory: async (req, res, next) => {
        
        try{
            const {_id} = req.user.project; 
            const directory = await directoryModel.findOne({projectId: _id});

            res.status(200).json({success: true, data: directory});

        }catch (err) {
            console.log(err);
            res.status(400).json({success: false, message: 'Server Error'})
        }
    },

    get_code: async (req, res, next) => {
        try{
            const {_id} = req.user.project; 
            const {id} = req.params;

            const code = await codeModel.findOne({projectId: _id, _id: id});

            res.status(200).json({success: true, data: code});

        }catch (err) {
            console.log(err);
            res.status(400).json({success: false, message: 'Server Error'})
        }
    },

    update_code: async (req, res, next) => {
        try{
            const {_id} = req.user.project; 
            const {id, codeText} = req.body;

            const code = await codeModel.findOneAndUpdate({projectId: _id, _id: id}, {code: codeText});
            
            res.status(200).json({success: true});

        }catch (err) {
            console.log(err);
            res.status(400).json({success: false, message: 'Server Error'})
        }
    }, 


}
