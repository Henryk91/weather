const express = require('express');
var weatherRouter = require("./routes/weather");
var geocoding = require("./routes/geocoding");
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.use("/api/geocode", geocoding);
app.use("/api/weather", weatherRouter);

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'index.html'));
 });
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
