var express = require("express");
var fetch = require("node-fetch");
var router = express.Router();

router.get("/", function(req, res, next) {
  const Api_Key = 'ea3e6bc1e839dc55bb78d341bc091065';
  console.log("Checking for data!")
  var coordinates = req.query.coordinates;
console.log(coordinates)
  fetch(
    `https://api.darksky.net/forecast/${Api_Key}/${coordinates}?units=auto&exclude=minutely,hourly,alerts`
  )
    .then(function(fetchRes) {
      return fetchRes.json();
    })
    .then(function(json) {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(json));
    })
    .catch(function(error) {
      res.send(JSON.stringify(error));
    });
});

module.exports = router;