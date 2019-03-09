const express = require('express');
var weatherRouter = require("./routes/weather");
const app = express();

require('dotenv').config()

app.use(express.static('dist'));
app.use("/api/weather", weatherRouter);
app.get('/*', function (req, res) {

  res.redirect("/");
 });
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
