var express = require("express");
var fs = require("fs");
var jsonfile = require("jsonfile");
var bodyParser = require('body-parser');

var app = express();
var deploy = false;
var port = process.env.PORT || deploy ? 80 : 3002;
var localizationFilePath = './app/json/localization.json';

app.use('/', express.static(__dirname));
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use('/build', express.static(__dirname + "/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/json/:file', function(req, res){
    var emptyFileData = {"data": []};
    jsonfile.readFile(localizationFilePath, function(err, data){
        if(!err) {
            return res.send(data);
        }

        jsonfile.writeFile(filePath, emptyFileData, function(err){
            if (err) return res.send(err);

            res.send(emptyFileData);
        });
    });
});
app.post('/json', function(req, res) {
    var data = {
      "data": req.body.data || []
    };
    var jsonPath = "./app/json/" + req.body.fileName;
    jsonfile.writeFile(jsonPath, data, function(err){
        if (err) return res.send(err);

        res.send("SUCCESS");
    });
});

app.all('/*', function(req, res) {
    res.sendfile('./index.html');
});

app.listen(port, function() {
    console.info("server running on %d port", port);
});

