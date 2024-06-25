// ordercontroller.js
const db = require('../models/index')
const Order = db.Order; // Correct model name
const Student = db.Student;

exports.addOrders = async (req, res) => {
  const { studentId, bookId } = req.body;
  try {
    const ins = await Order.create({ studentId, bookId });
    res.json(ins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.viewOrders = async (req, res) => {
    const data = await Order.findAll({
        include: [Student], // Correct association
      });
    res.send(data);
};
