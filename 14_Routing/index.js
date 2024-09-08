const express = require('express');
const app = express();


app.get("",(req,res)=>{
    console.log("data sent by browser",req.query)
     res.send("Welcome,"+req.query.name)
})


app.listen(5000);


//http://localhost:5000/?name=Tanishka