const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/aboutme',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/profile',(_,resp)=>{
    const user={
        name:'tanishka',
        email:'tanishka@test.com',
        skills:['sql','unix','React','JS']
    }
    resp.render('profile',{user})
})
app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000);