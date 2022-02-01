var express = require('express');  
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const cors = require('cors');


app.use('/static', express.static(path.join(__dirname, 'public')))



app.use(express.static('public'));

app.use(cors());

res.setHeader('Access-Control-Allow-Origin'
, req.headers.origin);



//middleware
app.use(bodyParser.json());


const posts = require('./routes/api/posts')

app.use('/', posts)





const port = process.env.PORT || 8000;
app.listen(port, () => console.log('server started on port 8000'));





