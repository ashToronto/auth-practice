const express       = require('express');
const bodyParser    = require('body-parser');
const cookieSession = require('cookie-session')
const axios         = require('axios');
const cors          = require('cors');
const env           = require('dotenv').config();
const bcrypt        = require('bcrypt')


const configuration = require('./knexfile.js')['development']
const knex          = require('knex')(configuration);

const app           = express();
const port          = 5050;
const client        = process.env.API_KEY;

// CONFIG: cors to pass info from proxied servers
app.use(cors());
// CONFIG: parse application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(
  cookieSession({
    name: "session",
    keys: ["ash"]
  })
);

// ROUTEING
const usersRouter     = require("./routes/users");


// USE ROUTES
app.use('/api/users', usersRouter(knex));

// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
// });
// Request CryptoCurrency data from API
// axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
//   .then(function(res) {
//     console.log(res.data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

app.listen(port, () => console.log(`CRYPTON on port ${port}`));
