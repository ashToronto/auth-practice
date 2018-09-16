const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Registration
// includes username validation
module.exports = (knex) => {

  router.get("/home", (req, res) => {
    if (!req.session.user_id) {
      res.json({
        Redirect: true,
        url: '/register',
      })
    } else {
      res.json({
        Redirect: true,
        url: '/home',
      })
    }
  });

  router.get("/register", (req, res) => {
    if (!req.session.user_id) {
      res.json({
        Redirect: true,
        url: '/register'
      })
    } else {
      res.json({
        Redirect: true,
        url: '/home'
      })
    }
  });

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
              res.json({
                Redirect: true,
                url: '/home',
              })
            }).catch(function (error) {
              console.error('Error: Inserting the user', error)
            });
        }
      }).catch(function (error) {
        console.error('Error: The user already Exists', error)
      });
  })

  router.post('/login', (req, res) => {
  knex.select('*')
  .from('users')
  .where('username', '=', req.body.username)
  .then(function (data) {
    if (bcrypt.compareSync(req.body.password, data[0].password)) {
      console.log('results is', data);
      req.session.user_id = data[0].id;
      res.json({
            Redirect: true,
            url: '/home',
          })
        } else {
          res.json({
            Redirect: false,
            url: '/register'
          })
    }
  }).catch(function (error) {
        console.error("Password is incorrect : " + error)
        res.json({
          Redirect: false,
          url: '/register'
        })
});
})

  return router;
};
