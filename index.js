
var express = require('express');  
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require('body-parser')
const path = require('path')










app.use('/static', express.static(path.join(__dirname, 'public')))



app.use(express.static('public'));



//middleware
app.use(bodyParser.json());


const posts = require('./routes/api/posts')

app.use('/', posts)

app.use('/Lessons',function(req, res, next){
    console.log("A new request received at " + Date.now());
    next();
});






const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server started on port 3000'));




  
