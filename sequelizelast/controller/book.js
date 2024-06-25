const db = require('../models/index')
const Orderbook = db.Orderbook
const User = db.User;


exports.Orderbook = async (req, res) => {
    
     const ins = await Orderbook.create({
        UserId:req.body.UserId,
        bookname:req.body.bookname,
        content:req.body.content,
        price:req.body.price,
    });
     res.send(ins)
};

exports.viewrelation = async(req,res)=>{
    const data = await Orderbook.findAll({
        include:[User]
    })
    res.send(data)
}
