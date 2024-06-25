const nodemailer = require('nodemailer');

const sendmail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'shashankparmar352@gmail.com',
        pass: 'Shashank2004p'
      }
    });

    const info = await transporter.sendMail({
      from: '"shashank 👻" <shashankparmar352@gmail.com>',
      to: "shashankparmar308@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>"
    });

    console.log(info);
    res.json(info);
  } catch (error) {
    console.error('Error occurred: ', error);
    res.status(500).json({
      msg: 'Failed to send email',
      error: error.message
    });
  }
};

module.exports = sendmail;
    