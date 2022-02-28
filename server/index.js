const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const request = require('request');
const JSON = require('JSON');

const PORT = 5000;
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const account_name = "sothebys_international_realty";
const requestEndpoint = `https://staging.perchwell.com/api/feeds/${account_name}`;

// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request

app.get('/getData', (req, res) => {
    request(
      { url: requestEndpoint },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
        console.log(body);
       res.json(JSON.parse(body));
      }
    )
  });
  

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});