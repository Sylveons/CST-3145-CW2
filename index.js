var express = require('express');  
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const cors = require('cors');


app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/static', express.static(path.join(__dirname, 'public')))



app.use(express.static('public'));



//middleware
app.use(bodyParser.json());


const posts = require('./routes/api/posts')

app.use('/', posts)







const port = process.env.PORT || 8080;
app.listen(port, () => console.log('server started on port 8080'));





