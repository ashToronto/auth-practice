const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
   if (req.body.email === "" || req.body.password === "" || req.body.username === ""){
    return res.status(400).send("Error: Username, Email or Password Field cannot be empty")
  } else {
    console.log(
      username + '\n',
      email + '\n',
      password
    )
  }
});

module.exports = router;

//  else {
//   knex('users').returning('id').insert([{
//     name: req.body.username,
//     email: req.body.email,
//     password: req.body.password
//   }])
// }
