
var express = require('express');  
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require('body-parser')
const path = require('path')








app.use(function(req, res, next) {
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();});
    
  });


app.use('/static', express.static(path.join(__dirname, 'public')))



app.use(express.static('public'));



//middleware
app.use(bodyParser.json());


const posts = require('./routes/api/posts')

app.use('/', posts)







const port = process.env.PORT || 8080;
app.listen(port, () => console.log('server started on port 8080'));





