const db = require('../models/index')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const { where } = require('sequelize');
const { Op } = require("sequelize");
const User = db.User;
const { authSchema } = require('./joi')

exports.addUser = async (req, res) => {
        const body = req.body;
        const salt = 10; // Corrected variable name from slat to salt
        const hash = await bcrypt.hash(body.password, salt);
        body.password = hash;
        const tokenn = jwt.sign(body, "shashank", { expiresIn: '365d' });
        // localStorage.setItem("token", token);
        // const token = localStorage.getItem("token");
        const emails = await authSchema.validateAsync(req.body)
        const ins = await User.create({
            name: emails.name,
            email: emails.email,
            password:emails.password, 
            token:tokenn
        });
        res.send(ins);
};

exports.logIn = async (req, res) => {
    const body = req.body;
    const users = await User.findAll({
        where: {
            // name: body.name
            name:{
                [Op.eq]:body.name
            }
        }
    });

    if (!users.length) {
        console.log("User not found");
        return res.send("User not found. Please register.");
    }

    const user = users[0];
    const check = await bcrypt.compare(body.password, user.password);

    if (!check) {
        console.log("Password is incorrect");
        return res.send("Password is incorrect.");
    }

    console.log("Congratulations! Please go to the home page for email verification.");
    res.send(user);
};


exports.resetPass = async (req, res) => {
    const body = req.body;
    const users = await User.findAll({
        where: {
            name: body.name
        }
    });

    if (!users.length) {
        console.log("User not found");
        return res.send("User not found.");
    }

    const user = users[0];
    const okk = await bcrypt.compare(body.password, user.password);

    if (!okk) {
        console.log("Old password is wrong");
        return res.send("Old password is wrong.");
    }
    const newHashedPassword = await bcrypt.hash(body.newPassword, 10);
    await User.update(
        {
            password: newHashedPassword
        },
        {
            where: {
                name: user.name 
            }
        }
    );
    console.log("Password reset successful");
    res.send("Password reset successful.");
};

exports.deleteUser = async(req,res)=>{
    const idd = req.params.id;
    const dlt = await User.destroy({
        where:{
            id:idd
        }
    })
    res.send("data deleted succes")
}


