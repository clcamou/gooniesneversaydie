const bodyParser = require("body-parser");
const express = require("express");


const router = express.Router();

router.use(bodyParser.json());

const thoughts = [
    { _id: 123, message: "Please check the lesson hub for assignments", author: "Ms. Camou" },
    { _id: 456, message: "No homework this Friday", author: "Ms. Camou" }
  ];
  
  router.get("/api/thoughts", (req, res) => {
    const orderedThoughts = thoughts.sort((t1, t2) => t2._id - t1._id);
    res.send(orderedThoughts);
  });
  
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(401);
  }
  
  router.post("/api/thoughts", ensureAuthenticated, (req, res) => {
    const { message } = req.body;
    const newThought = {
      _id: new Date().getTime(),
      message,
      author: req.user.nickname
    };
    thoughts.push(newThought);
    res.send({ message: "Thanks!" });
  });
  
  module.exports = router;