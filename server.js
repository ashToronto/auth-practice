const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const cors = require('cors')
const env = require('dotenv').config()

const app = express();
const port = 5050;
const client = process.env.API_KEY;

// CONFIG: cors to pass info from proxied servers
app.use(cors());
// CONFIG: parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


app.post('/login', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  console.log(
    username + '\n',
    email + '\n',
    password
  )
});

// Request CryptoCurrency data from API
axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
  .then(function(res) {
    console.log(res.data);
  })
  .catch(function(error) {
    console.log(error);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
