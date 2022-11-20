// Backend renders frontend

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const { response, urlencoded } = require('express');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'pug');

app.get('/', function (req, res, next) {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

app.get("*", (req,res)=>{
  res.send("404");
})

module.exports = app;

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at port 3000!");
});