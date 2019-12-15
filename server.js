const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');

const photo = new Array(
	{name: 'developer', password: 'developer'}
);

app.set('view engine','ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
	console.log(req.session);
	res.redirect('/upload');
});

app.get('/upload', (req,res) => {
		res.status(200).render('upload');
});

app.post('/upload', (req,res) => {
	users.forEach((user) => {
		if (user.name == req.body.name && user.password == req.body.password) {
			req.session.authenticated = true;
			req.session.username = user.name;			
		}
	});
});

app.listen(process.env.PORT || 8099);
