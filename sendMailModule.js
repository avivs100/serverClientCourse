

function sendMailToUser(nodemailer,sentTo,subjectOfMail,textToSend){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'avivsagiproj@gmail.com',
          pass: '123456AS'
        }
      });

      //   service: 'hotmail',
      //   auth: {
      //     user: process.env.AUTH_EMAIL,
      //     pass: process.env.AUTH_PASS,
      //   }
      // });
      
      var mailOptions = {
        from: 'avivsagiproj@gmail.com',
        to: sentTo,
        subject: subjectOfMail,
        text: textToSend
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = { sendMailToUser };

