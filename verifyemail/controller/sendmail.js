
// const link = `http://localhost:9090/verify/${user.token}`;
// html: `Click <a href="${link}">here</a> to verify your email.`,
const nodemailer = require('nodemailer');
const User = require('../model/user')

const sendmail = async (req, res) => {
  try {
    const pr = req.params.id;
    const data = await User.findById(pr)
    console.log(data,'datatatattttttttttttttttttttttttttttttttt')
    
    // const userdata = await User.findById('66348064ac09f417a682ae4a');
    // console.log(userdata,userdata.token,'userdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

    const link = `http://localhost:9090/verify/${data.token}`;
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'bertha84@ethereal.email',
        pass: 'pkh4kP13v9FgQSds2F'
      }
    });
    const info = await transporter.sendMail({
      from: '"shashank 👻" <shashankparmar352@gmail.com>',
      to: "bertha84@ethereal.email",
      subject: "plaese verify your email",
      text: "verify your email",
      html: `Click <a href="${link}">here</a> to verify your email.`,
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
    