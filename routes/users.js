const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


// Registration
// includes username validation
module.exports = (knex) => {

  router.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password
    knex.select("username")
      .from("users")
      .where("username", username)
      .andWhere("email", email)
      .then(userNametList => {
        if (userNametList.length === 0) {
          return knex('users')
            .returning('id')
            .insert([{
              username: req.body.username,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10)
            }])
            .then(function(id) {
              req.session.user_id = id[0];
              const currentUser = {
                id: id[0],
                username: username,
                email: email,
                password: password
              };
              res.status(200).send(JSON.stringify(currentUser));
            });
        } 
        console.log("not inserted");
      }).catch(function(error) {
        console.error('There was an error:', error)
      })
  })

  return router;
};
