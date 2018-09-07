const express     = require('express');
const router      = express.Router();
const bcrypt      = require('bcrypt');


module.exports = (knex) => {

router.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
    console.log(
      username + '\n',
      email + '\n',
      password
    )
      knex('users')
      // .returning('id')
      .insert([{
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      }]).then(()=>{})

  })
  return router;
};
