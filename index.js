
var express = require('express');  
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require('body-parser')
var path = require("path");

var fs = require("fs");


    
    







app.use(function(req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
    });
    





app.use(bodyParser.json());


const posts = require('./routes/api/posts')

app.use('/', posts)

app.use(function(req, res, next) {
    // Uses path.join to find the path where the file should be
    var filePath = path.join(__dirname,
    "images"
    , req.url);
    // Built-in fs.stat gets info about a file
    fs.stat(filePath, function(err, fileInfo) {
    if (err) {
        res.send("file not found!")
    next();
    return;
    }
    if (fileInfo.isFile()) res.sendFile(filePath);
    else next();
    });
    });
 
    



const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server started on port 3000'));




  
