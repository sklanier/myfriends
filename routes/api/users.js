const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');

// @route    GET api/users/test
// @desc     Tests users route
// @access   Public
router.get('/test', (req, res) => res.json({msg: "Users Works"}));

// @route    GET api/users/register
// @desc     Register user
// @access   Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({email: 'Email already exists'});
      } else {

        const avatar = gravatar.url(req.body.email, {
          r: '200',
          r: 'pg',
          d: 'mm'
        })
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: hash,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
          // bcrypt.compare(newUser.password, hash, (err, isMatch) => {
          //   if (err) {
          //     throw err
          //   } else if (!isMatch) {
          //     console.log("passwords don't match")
          //   } else {
          //     console.log("passwords match")
          //   }
          // });
        })
      }
    })
})

module.exports = router;