var express = require("express");
var fetch = require("node-fetch");
var router = express.Router();

router.get("/", function (req, res) {
  const Api_Key = process.env.Api_Key;

  var coordinates = req.query.coordinates;

  fetch(
    `https://api.darksky.net/forecast/${Api_Key}/${coordinates}?units=auto&exclude=alerts`
  )
    .then((fetchRes) => fetchRes.json())
    .then(function (json) {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(json));
    })
    .catch(function (error) {
      res.send(JSON.stringify(error));
    });
});

module.exports = router;