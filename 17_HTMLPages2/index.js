const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public')

//app.use(express.static(publicPath))  

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/aboutme',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000);