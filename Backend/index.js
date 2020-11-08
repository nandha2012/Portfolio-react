var nodemailer = require('nodemailer');
var cors = require('cors');
var express = require('express');
var app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/',function(req,res) {
	const formData = {
		fullname: req.body.fullname,
		email:req.body.email,
		subject:req.body.subject,
		messege:req.body.messege
	}
	console.log(formData);
});
app.listen(5000,()=>{console.log('!! connected port 5000 !!')});















