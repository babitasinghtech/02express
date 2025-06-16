const express = require('express');  //step 1
const app = express();   //require


app.get('/',(req, res)=>{               //first / is important 
 res.send('hello bhai');
});


app.get('/about',(req,res)=>{              //node only show get request on browser
    res.send('<h1>I am about Page<h1>');
    
});

//create route for contact us and services

app.get('/contact-us',(req,res)=>{
    res.send("contact on this web page");
});

app.get('/services',(req,res)=>{
    res.send('visit our website on local basis');
});

//create route

app.post('/login',(req,res)=>{
    res.send('login sucess');
});
//create a delete route and test it using postman 

app.listen(5500,()=>
    console.log('server is running at port 5500....')
);