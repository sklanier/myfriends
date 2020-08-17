const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../../models/User');


router.get('/test', (req, res) => res.json({msg: "API Works"}));

// Sign-up ENDPOINT
router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: hash
    });
    newUser.save().then((response) => {
      res.status(201).json({
        message: "User successfully created!",
        result: response
      });
    }).catch(error => {
      res.status(500).json({
        error: error
      });
    });
  });
});

module.exports = router;