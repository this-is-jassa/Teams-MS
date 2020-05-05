const projectModel = require('../model/project.model');
const directoryModel = require('../model/directory.model');
const codeModel = require('../model/code.model');
const mongo = require('mongoose');

module.exports = {

    post: async (req, res, next) => {
        try {
            const { _id } = req.user.project;
            const { fileName, fileType, codeText, parentDirId } = req.body;

            const dirId = mongo.Types.ObjectId();

            let payload = {
                _id: dirId,
                name: fileName,
                fileType: fileType,
                text: '',
                child: [],
                projectId: _id
            }

            if (['.js', '.php', '.java', '.txt', '.html', '.scss', '.sass', '.css', '.ts', '.c', '.cpp', '.py', 'dir'].includes(fileType)) {
                
                if(fileType !== 'dir') {
                    const fileId = mongo.Types.ObjectId();
                    payload.text = fileId;
    
                    const codePayload = {
                        _id: fileId,
                        projectId: _id,
                        code: codeText
                    }
                    const createFile = await codeModel.create(codePayload);
                }

                const createDir = await directoryModel.create(payload);
                
                const addInstanceToParent = await directoryModel.findOneAndUpdate({projectId: _id, _id: parentDirId}, {$push: {child: dirId}});

                res.status(200).json({success: true});

            } else {
                console.log("Not a valid File type")
                throw 'Not a valid File type';
            }


        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: err })
        }
    },


    get_dir: async (req, res, next) => {

        try {
            
            const { _id } = req.user.project;
            const { dirId } = req.params;


            const directory = await directoryModel.findOne({ projectId: _id, _id: dirId })


            res.status(200).json(directory);

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' })
        }
    },

    update_dir: async (req, res, next) => {

        try {
            const { _id } = req.user.project;
            const { dirId, newName } = req.body;

            await directoryModel.findOneAndUpdate({ projectId: _id, _id: dirId }, { name: newName })
            res.status(200).json({ success: true });

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' })
        }

    },

    get_file: async (req, res, next) => {
        try {
            const { _id } = req.user.project;
            const { fileId } = req.params;

            const code = await codeModel.findOne({ projectId: _id, _id: fileId });

            res.status(200).json({ success: true, data: code });

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' })
        }
    },


    update_file: async (req, res, next) => {
        try {
            const { _id } = req.user.project;
            const { fileId, codeText } = req.body;

            await codeModel.findOneAndUpdate({ projectId: _id, _id: fileId }, { code: codeText });

            res.status(200).json({ success: true });

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' })
        }
    },

    // delete_file: async (req, res, next) => {

    //     try {

    //         const { _id } = req.user.project;
    //         const { dirId, fileId } = req.body;

    //         const deleteInstance = directoryModel.findOneAndUpdate({ projectId: _id, _id: dirId }, { $pull: { clild: fileId } });
    //         const deleteFile = codeModel.deleteOne({ projectId: _id, _id: fileId });

    //         Promise.resolve([deleteInstance, deleteFile])
    //             .then(response => {
    //                 res.status(200).josn({ success: true })
    //             })

    //     } catch (err) {
    //         console.log(err);
    //         res.status(400).json({ success: false, message: 'Server Error' })

    //     }
    // }


}
