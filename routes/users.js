const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Registration
// includes username validation
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
    const insertUser = knex('users')
      .returning('id')
      .insert([{
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      }]).then(userNameValid => {console.log(userNameValid)})

      const userNameCheck = knex.select("username")
       .from("users")
       .where("username", username)
       .then(userNametList => {
       console.log(userNametList)
     })

     const emailCheck = knex.select("email")
      .from("users")
      .where("email", email)
      .then(emailList => {
      console.log(emailList)
    })

     if (!userNameCheck && !emailCheck){
       return insertUser;
     } else {
       console.log('Username or email is already in use')
     }

  })
  return router;
};
