const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


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

     if (!userNameCheck){
       return insertUser;
     } else {
       console.log('Username is already taken')
     }

  })
  return router;
};

// knex.select("*")
//   .from("users")
//   .then(userNametList => {
//     console.log(userNametList)
//   })
