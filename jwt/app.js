const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/auth")
  .then(() => console.log("connection succes"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    tokenn: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function verifytoken(req, res, next) {
    const headerr = req.headers["authorization"];
    console.log("hhhh", headerr);
    if (headerr !== "") {
        req.user = headerr;
        next();
    } else {
      console.log("authorization header missing");
      res.status(401).json({
        msg: "Unauthorized",
      });
    }
  }
  
  app.get("/verify", verifytoken, (req, res) => {
    console.log("-----------------", req.user);
    const tk = req.user;
    try {
      var decoded = jwt.verify(tk, "shashank");
      console.log("decoded.foo", decoded);
  
      if (decoded) {
        res.status(200).json({
          msg: "success",
        });
      } else {
        res.status(500).json({
          msg: "ERR",
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: "Invalid token",
        error: error.message,
      });
    }
  });

app.post("/post", async (req, res) => {
  const body = req.body;
  const token = jwt.sign({ body }, "shashank", { expiresIn: "24h" });
  // crt.token = token;
  await user.create({
    username: body.username,
    email: body.email,
    gender: body.gender,
    tokenn: token,
  });
  res.status(200).json({ message: "created success", token:token });
  // res.cookie(tokenn)
});

app.listen(2000);
