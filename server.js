const express     = require('express');
const app         = express();
const axios       = require('axios')
const port        = 8080;
const env         = require('dotenv').config()
const client      = process.env.API_KEY;


axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
