const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('Welcome, This is Home Page')
})

app.get('/about',(req,res)=>{
    res.send('Welcome, This is About Page')
})

app.get('/help',(req,res)=>{
    res.send('Hello, This is Help Page')
})

app.listen(5000);