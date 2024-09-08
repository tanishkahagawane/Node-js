const express = require('express');
const app = express();

//middleware

const reqFilter=(req,resp,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        resp.send("Please provide age")
    }else if(req.query.age<18){
        resp.send("You can not access this page")
    }else{
        next(); // Pass control to the next middleware function
    }
    
}

//works for http://localhost:5000/users?age=20
app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send('Welcome to Home Page')
})

app.get('/users',(req,resp)=>{
    resp.send('Welcome to Users Page')
})

app.listen(5000);