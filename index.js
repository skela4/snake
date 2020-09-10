/*global __dirname*/
/*eslint no-undef: "error"*/

// import express module
const express = require('express');

var path = require("path");
// Create a new express application instance
const app = express();

app.use(express.static(`${__dirname}/snake_game/public`));

app.get('/', function (req, res) {
	res.sendFile(path.join(`${__dirname}/snake_game/public/index.html`));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});