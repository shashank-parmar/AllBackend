const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/populate", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

const classSchema = new mongoose.Schema({
    std: {
        type: Number,
        required: true,
    },
    div: {
        type: String,
        required: true,
    },
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
});

const Classs = mongoose.model("Classs", classSchema);

module.exports = {
    Classs,
};
