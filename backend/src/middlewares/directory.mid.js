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


            if ([fileType, parentDirId].includes(undefined) || freeze.isFreeze) throw ('Error occured')

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


            if (['.js', '.php', '.java', '.txt', '.html', '.scss', '.sass', '.css', '.ts', '.c', '.cpp', '.py', '.json', 'dir'].includes(fileType)) {


                if (fileType !== 'dir') {
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

                await directoryModel.findOneAndUpdate({ projectId: _id, _id: parentDirId, fileType: 'dir' }, { $push: { child: dirId } });


                req.projectLog = log;
                req.data = { _id: dirId };

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


        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {

            const { _id } = req.user.project;
            const { dirId, newName } = req.body;

            if (!!!dirId && !!!newName) { throw 'Validation Error' }

            const directory = await directoryModel.findOne({ projectId: _id, _id: dirId });

            req.projectLog = {
                type: 'Dir',
                message: `${req.user.userName} renamed a folder from ${directory.name} to ${newName}`
            }
            req.data = {};

            directory.name = newName;

            await directory.save();
            // await directoryModel.findOneAndUpdate({ projectId: _id, _id: dirId }, { name: newName });

            next();

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


        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
        try {

            const { _id } = req.user.project;
            const { codeText, dirId, fileName } = req.body;

            if (!!!codeText && !!!dirId && !!!fileName) {
                throw 'Data Validation error';
            }

            const directory = await directoryModel.findOne({ projectId: _id, _id: dirId });

            if (!!!directory) throw 'Error Occured!'

            req.projectLog = {
                type: 'EditFile',
                message: `${req.user.userName} updated ${directory.name}.${directory.fileType}`
            }

            if (directory.name !== fileName) {
                req.projectLog.message = `${req.user.userName} updated the name of ${directory.name}.${directory.fileType} to ${fileName}.${directory.fileType}. (Might have updated the Content as well)`;
                directory.name = fileName;
                await directory.save();
            }


            await codeModel.findOneAndUpdate({ projectId: _id, _id: directory.text }, { code: codeText });

            req.data = {};

            next();

        } catch (err) {
            console.log(err);
            res.status(400).json({ success: false, message: 'Server Error' })
        }
    },

    findFile: async (req, res, next) => {
        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }
        try {
            const { searchText } = req.params;
            const { _id } = req.user.project;

            const result = await directoryModel.find({ projectId: _id, name: { $regex: '^' + searchText } }).limit(30);

            res.status(200).json({ success: true, data: result });
        }
        catch (err) {
            console.log(err)
            res.status(400).json({ success: false, message: 'Server Err' })
        }
    },

    delete_file: async (req, res, next) => {


        if (!req.user.permission) {
            res.status(400).json({ success: false, msg: "Permission Not granted" });
            return;
        }

        try {
            const { _id } = req.user.project;
            const { parentDirId, dirId } = req.body;


            const pDirectory = await directoryModel.findOne({ projectId: _id, _id: parentDirId });
            const cDirectory = await directoryModel.findOne({ projectId: _id, _id: dirId });


            if (!!!pDirectory || !!!cDirectory) { throw 'Validation Error .' }
            if (cDirectory.fileType === "dir" || pDirectory.fileType !== "dir") { throw 'Validation Error .' }


            const index = pDirectory.child.findIndex(id => dirId == id);

            if (index === -1) { throw 'Validation Error .' }

            pDirectory.child.splice(index, 1);


            const unlink = pDirectory.save();
            const deleteDir = cDirectory.remove();
            const file = codeModel.deleteOne({ projectId: _id, _id: cDirectory.text });

            req.projectLog = {
                type: 'Delete',
                message: `${req.user.userName} deleted a file called ${cDirectory.name}${cDirectory.fileType} from the folder ${pDirectory.name}`
            }

            res.data = {};

            await Promise.all([unlink, deleteDir, file]);

            next();
        }
        catch (err) {
            console.log(err)
            res.status(400).json({ success: false, message: 'Server Err' });
        }

    },

    delete_dir: async (req, res, next) => {

        try {
            const {_id} = req.user.project;
            const {parentDirId, dirId} = req.body;

            const pDirectory = await directoryModel.findOne({ projectId: _id, _id: parentDirId });
            const cDirectory = await directoryModel.findOne({ projectId: _id, _id: dirId });

            if (!!!pDirectory || !!!cDirectory) { throw 'Validation Error .' }
            if (cDirectory.fileType !== "dir" || pDirectory.fileType !== "dir") { throw 'Validation Error .' }

            const index = pDirectory.child.findIndex(id => dirId == id);

            if (index === -1) { throw 'Validation Error .' }

            pDirectory.child.splice(index, 1);

            req.projectLog = {
                type: 'Delete',
                message: `${req.user.userName} deleted a Folder called ${cDirectory.name} from the folder ${pDirectory.name}.`
            }

            res.data = {};

            await pDirectory.save();

            next();

        }
        catch (err) {
            console.log(err)
            res.status(400).json({ success: false, message: 'Server Err' });
        }

    }

}
