
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





const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server started on port 3000'));




  
