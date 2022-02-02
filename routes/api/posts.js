const express = require('express');
const { route } = require('express/lib/application');
const mongodb = require('mongodb')

const router = express.Router();



const uri =   process.env.MONGODB_URI || 'mongodb+srv://Sylveons:Awesome123@cluster0.he0tv.mongodb.net/After-School-Club?retryWrites=true&w=majority'
//get post



router.get('/', async (req,res) => {
    
    res.send("Select a collection /lessons or /orders")
} );



router.get('/lessons', async (req,res) => {
    const lessons = await loadlesson();
    res.send(await lessons.find({}).toArray())
} );



router.get('/orders', async (req,res) => {
    const orders = await loadorders();
    res.send(await orders.find({}).toArray())
} );

//add post

router.post('/orders', async(req, res) => {

    const orders = await loadorders();
    await orders.insertOne({

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

// }

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


module.exports = router;


let store = new Vue({

    el: '#store',
    
 
data: { lessons: {}},

lessons, lessons,

created: function () {
    fetch('http://dominique-walker-cst1345-cw2.herokuapp.com/lessons').then(
        function (response) {
     
            response.json().then(
                function (json) {

                    store.lessons = json;

                    console.log(JSON.stringify(json))
                    lessons.push(json)
                    console.log(lessons);

                    

                });




        })

}


})
