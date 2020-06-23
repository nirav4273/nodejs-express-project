import multer from 'multer';
import path from 'path';
import fs from 'fs';

// File destination
const destination = path.join(__dirname, '../../../uploads');

// File storage & name changing
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destination)
  },
  filename: function (req, file, cb) {
  	const filename = file.originalname;
  	const file_name_array = filename.split(".");
	const file_extension = file_name_array[file_name_array.length - 1];
	const preFix = file.mimetype.substring(0, file.mimetype.indexOf("/"));
    cb(null, preFix + '_' + Date.now()+"."+file_extension);
  }
});

// File upload function.
export const uploadFile = multer({ storage: storage }).array('files');

// Remove file function
export const removeFile = (url) => {
	const filename = getFileName(url);
	deleteFile(`${destination}/${filename}`);
}

// Delete file from storage.
const deleteFile = (filePath) => {
	fs.unlink(filePath, (err, result) => {
		if(err) {
			console.log("ERR WHILE REMOVE FILE", err);
		} else {
			// console.log("FILE REMOVED");
		}
	})
}

const getFileName = (url) => {
	return url.substring((url.lastIndexOf("/")+1), url.length)
}

export const getFilePath = (filename) => {
	return `${process.env.API_URL}/bugs/file/${filename}`;
}