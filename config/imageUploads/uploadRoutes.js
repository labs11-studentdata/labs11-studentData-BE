const express = require('express');
const multer = require('multer');

const server = express();


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

/**
 *  still a work in progress - testing uploading images using serverside disk storage
 *  a post to /api/uploads should get an image as a req from the front end 
 *  and store it in the public /uploads folder on the server
 *  the relative path to the image is returned if the upload is successful 
 *  which should then be stored in the photo_url field of the student in the database (might need to rewrite this to be asynchronous)
 */

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: fileFilter 
})

server.post("/", upload.single('userImage'), (req, res, next) => {

    if(!req.file) {
        console.log("did not receive image file");
        return res.send({
            success: false
        })
    } else {
        console.log("received file", req.file.path);
        res.status(200).json(req.file.filename);
    }

});

module.exports = server;