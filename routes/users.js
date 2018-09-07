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

module.exports = router;

// if (req.body.email === "" || req.body.password === "" || req.body.username === ""){
//   return res.alert("Enter the correct address")
// } else {
//   knex('users').returning('id').insert([{
//     name: req.body.username,
//     email: req.body.email,
//     password: req.body.password
//   }])
// }
