const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
const app = express();

app.set('view engine','ejs');


app.get('/', (req,res) => {
	res.redirect('/filetoupload');
});

app.get('/filetoupload', (req,res) => {
	res.status(200).render('filetoupload');
});

app.post('/filetoupload' , (req,res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
		let title = null;
		let description = null;
		let image = null;
		title = fields.title;
        	description = fields.description;
		console.log("1");
		fs.readFile(files.filetoupload.path, (err,data) => {
			image = new Buffer.from(data).toString('base64');
			res.status(200).render('display', {t :title, d :description, i: image});
		});
	});
});

app.listen(process.env.PORT || 8099);
