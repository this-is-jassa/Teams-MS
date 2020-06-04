const projectModel = require('../model/project.model');
const directoryModel = require('../model/directory.model');
const codeModel = require('../model/code.model');
const mongo = require('mongoose');


module.exports = {

    post: async (req, res, next) => {
        
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { _id, freeze } = req.user.project;
            const { fileName, fileType, codeText, parentDirId } = req.body;


            if([fileType, parentDirId].includes(undefined) || freeze.isFreeze) throw('Error occured')

            const dirId = mongo.Types.ObjectId();

            let payload = {
                _id: dirId,
                name: fileName,
                fileType: fileType,
                text: '',
                child: [],
                projectId: _id
            }

            let log = {
                type: 'Dir',
                message: `${req.user.userName} added a new folder called ${fileName}`
            }


            if (['.js', '.php', '.java', '.txt', '.html', '.scss', '.sass', '.css', '.ts', '.c', '.cpp', '.py','.json', 'dir'].includes(fileType)) {
                

                if(fileType !== 'dir') {
                    const fileId = mongo.Types.ObjectId();
                    payload.text = fileId;
    
                    const codePayload = {
                        _id: fileId,
                        projectId: _id,
                        code: codeText
                    }

                    log.type = 'NewFile';
                    log.message = `${req.user.userName} added a new File called ${fileName}.${fileType}`;

                    await codeModel.create(codePayload);
                }

               await directoryModel.create(payload);

               await directoryModel.findOneAndUpdate({projectId: _id, _id: parentDirId, fileType:'dir'}, {$push: {child: dirId}});
                

                req.projectLog = log;
                req.data = {_id: dirId};

                next();

                // res.status(200).json({success: true});

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

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

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

        const { _id, freeze } = req.user.project;

        if (!req.user.permission || freeze.isFreeze) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { dirId, newName } = req.body;

            const directory = await directoryModel.findOne({ projectId: _id, _id: dirId });
            
            req.projectLog = {
                type: 'Dir',
                message: `${req.user.userName} renamed a folder from ${directory.name} to ${newName}`
            }

            directory.name = newName;
            
            await directory.save();
            // await directoryModel.findOneAndUpdate({ projectId: _id, _id: dirId }, { name: newName });

            next();

            // res.status(200).json({ success: true });

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' })
        }

    },

    get_file: async (req, res, next) => {

        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
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

        const { _id, freeze } = req.user.project;

        if (!req.user.permission || freeze.isFreeze) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
        try {
            const { fileId, codeText, dirId } = req.body;

            const directory = await directoryModel.findOne({ projectId: _id, _id: dirId });

            req.projectLog = {
                type: 'EditFile',
                message: `${req.user.userName} updated ${directory.name}.${directory.fileType}`
            }

            await codeModel.findOneAndUpdate({ projectId: _id, _id: fileId }, { code: codeText });
            
            next();

            res.status(200).json({ success: true });

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' })
        }
    },

    findFile: async(req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
        try{
            const {searchText} = req.params;
            const {_id} = req.user.project;

            const result = await directoryModel.find({projectId: _id, name: {$regex: '^' + searchText}} ).limit(30);

            res.status(200).json({success: true, data: result});
        }
        catch(err) {
            console.log(err)
            res.status(400).json({success: false, message: 'Server Err'})
        }
    },

    delete_file: async(req, res, next) => {
        
        const {_id, freeze} = req.user.project;
        
        if (!req.user.permission || freeze.isFreeze) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try{
            const {userName} = req.user;
            const {fileId} = req.body;

        }
        catch(err) {
            console.log(err)
            res.status(400).json({success: false, message: 'Server Err'})
        }


    }

}
