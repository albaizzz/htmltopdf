var fs = require('fs');
var pdf = require('html-pdf');
// var html = fs.readFileSync('http://www.reservasi.com', 'utf8');
var options = { format: 'Letter' };

var http = require('http');
var fs = require("fs");
var request = require("request");

request('http://localhost:3002/index', function(error, response, html) {
    var html1 = html;
    pdf.create(html, options).toFile('./sample-pdf.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });

})
