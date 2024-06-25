const db = require('../models/index')
const Book = db.Book

exports.addbook = async(req,res)=>{
    const d = req.body;
    const ins = await Book.create({
        book_name:d.book_name,
        book_category:d.book_category,
        book_price:d.book_price,
        author:d.author,
    })
    res.send(ins)
}