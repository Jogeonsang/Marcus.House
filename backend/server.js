const express = require("express");
const db = require('./db');
const productsAPI = require('./products/route')
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();


const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/data.json
app.use(bodyParser.json());

// API
app.use('/products', productsAPI)

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

