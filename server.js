const url = require('url');
const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const app = express();

app.set('view engine','ejs');

var title = null;
var description = null;
var mimetype = "images/jpeg";
var image;
var new_r = {};

app.get('/', (req,res) => {
	res.redirect('/filetoupload');
});

app.get('/filetoupload', (req,res) => {
	res.status(200).render('filetoupload');
});

app.post('/filetoupload', (req,res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
      		const filename = files.filetoupload.path;
		console.log(filename);
      		if (fields.title && fields.title.length > 0) {
        		title = fields.title;
      		}
		if (fields.description && fields.description.length > 0) {
        		description = fields.description;
      		}
      		if (files.filetoupload.type) {
        		mimetype = files.filetoupload.type;
      		}
		console.log("1");
		fs.readFile(files.filetoupload.path, (err,data) => {
          		image = new Buffer.from(data).toString('base64');
		});
	});
	res.redirect('/display');
});

app.get('/display', (req,res) => {
	res.status(200).render('display', {t: title, d: description});
});

app.listen(process.env.PORT || 8099);
