const express = require('express');
const { route } = require('express/lib/application');
const mongodb = require('mongodb')
const app = express();


const router = express.Router();



const uri =   process.env.MONGODB_URI || 'mongodb+srv://Sylveons:Awesome123@cluster0.he0tv.mongodb.net/After-School-Club?retryWrites=true&w=majority'
//get post



router.get('/', async (req,res) => {
    
    res.send("Select a collection /lessons or /orders")
} );



router.get('/lessons', async (req,res,next) => {
    const lessons = await loadlesson();
    res.send(await lessons.find({}).toArray())
next();
} );



router.get('/orders', async (req,res,next) => {
    const orders = await loadorders();
    res.send(await orders.find({}).toArray())
} );

//add post

router.post('/orders', async(req, res, next) => {

    const orders = await loadorders();
    await orders.insertOne({

        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Phonenumber: req.body.Phonenumber,
        Lessonid: req.body.Lessonid,
        Spaces: req.body.spaces
    });

    res.status(201).send()
    next()
})



async function loadlesson() {

    
    const client = await mongodb.MongoClient.connect
    (uri,
     {UseNewUrlParser: true})


return client.db("After-School-Club").collection('Lessons');




    }

async function loadorders() {

  
    const client = await mongodb.MongoClient.connect
    (uri,
     {UseNewUrlParser: true,
       })


return client.db("After-School-Club").collection('Orders');


    }


    
app.use((req, res, next) => {
    console.log(req);
    next();
  });


module.exports = router;

