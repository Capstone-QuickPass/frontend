"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.get('/', function (req, res) {
    res.send('I am alive!');
});
app.listen(port, function () {
    console.log("I am listening at http://localhost:" + port);
});
exports["default"] = app;
