require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(`${__dirname}/client/build`));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));



// send email
app.post('/send', (req, res, next) => {
    const { name, subject, message, email, date } = req.body;
    let mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PW
        }
    });
    mailOpts = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_RECEIVER,
        subject: 'New message from contact',
        html: `<div>From: ${email}<br> Name: ${name}<br> Subject: ${subject}<br> Message: ${message}<br> Date: ${date}</div>`
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
            res.status(500).send({ response: 'Something went wrong when sending your message, please try again :)' });
        }
        else {
            res.send({ response: `Thank you, ${name}! Your message has been sent!`});
        }
    });

});


// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
});

app.listen(port, ()=> console.log(`listening on port ${port}`));
module.exports = app;
