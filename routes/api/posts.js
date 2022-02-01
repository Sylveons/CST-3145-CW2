const express = require('express');
const { route } = require('express/lib/application');
const mongodb = require('mongodb')
var uri = 'mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const router = express.Router();


//get post


router.get('/test', async (req,res) => {
  
    res.send("pain")
} );



router.get('/', async (req,res) => {
    const lessons =  loadlesson();
    res.send( lessons.find({}).toArray())
} );



router.get('/orders', async (req,res) => {
    const orders =  loadorders();
    res.send( orders.find({}).toArray())
} );

//add post

router.post('/orders', async(req, res) => {

    const orders =  loadorders();
     orders.insertOne({

        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Phonenumber: req.body.Phonenumber,
        Lessonid: req.body.Lessonid,
        Spaces: req.body.spaces
    });

    res.status(201).send()
})


//update post 

// router.put('/orders', async(req, res) => {

//     const orders = await loadlesson();
//     await orders.findOneAndUpdate(req.body.id,{
//     Spaces: req.body.spaces
//     })

// res.send('Item Updated!');

// })



async function loadlesson() {

    try{
    const client =  mongodb.MongoClient.connect
    (process.env.MONGODB_URI ||'mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     {UseNewUrlParser: true})


return client.db("After-School-Club").collection('Lessons');

} catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}



async function loadorders() {

    try{

    const client =  mongodb.MongoClient.connect
    (process.env.MONGODB_URI|| 'mongodb+srv://Sylveons:Awesome123@cluster0.bro9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ,
     {UseNewUrlParser: true})


return client.db("After-School-Club").collection('Orders');


} catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}




module.exports = router;