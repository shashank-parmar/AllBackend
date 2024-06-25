const nodemailer = require("nodemailer")
const db = require('../models/index');
const jwt = require("jsonwebtoken")
const { where } = require("sequelize");
const User = db.User;

exports.sendmail = async(req,res)=>{
    const idd = req.params.id;
    const data = await User.findByPk(idd);
    console.log(data,'jjjjjjjjjjjjjjjjjjjjj')
    const link = `http://localhost:9000/verify/${data.token}`
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'garrison.rohan@ethereal.email',
            pass: 'vgYwuY99cyYUPzdY21'
        }
    });

    const info = await transporter.sendMail({
        from: '"shashank 👻" <shashankparmar352@gmail.com>',
        to: "garrison.rohan@ethereal.email",
        subject: "plaese verify your email",
        text: "verify your email",
        html: `Click <a href="${link}">here</a> to verify your email.`,
      });
}

exports.verify = async(req,res)=>{
    const tk = req.params.id;
    const vfy = await jwt.verify(tk,'shashank')
    if(vfy){
        console.log("token verify")
        res.send("token verify")
    }
    
}