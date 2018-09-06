const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  console.log(
    username + '\n',
    email + '\n',
    password
  )
});

module.exports = router
