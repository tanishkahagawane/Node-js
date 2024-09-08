const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

// app.use(reqFilter)

route.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send('Welcome to Home Page')
})

// app.get('/users',reqFilter,(req,resp)=>{
//     resp.send('Welcome to Users Page')
// })

app.get('/users',(req,resp)=>{
    resp.send('Welcome to Users Page')
})

route.get('/about',(req,resp)=>{
    resp.send('Welcome to About  Page')
})

route.get('/contact',(req,resp)=>{
    resp.send('Welcome to cotact  Page')
})

app.use('/',route);
app.listen(5000);