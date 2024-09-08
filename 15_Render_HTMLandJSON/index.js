const express = require('express');
const app = express();

//HTML +Link Page
app.get('',(req,res)=>{
    res.send(`
        <h1>Welcome, This is Home Page</h1>
        <a href="/about">Go to About Page</a>
        `)
})

app.get('/about',(req,res)=>{
    //http://localhost:5000/about/?name=Tanishka
    res.send(`
        <input type="text" placeholder="User Name" value="${req.query.name}"/>
        <button>Click Me</button>
        <a href="/">Go to Home Page</a>
        `)
})

//JSON

app.get('/help',(req,res)=>{
    res.send([{
        name:'Tanishka',
        email:'tanishka@test.com'
    },
    {
        name:'Rachel',
        email:'rachel@test.com'
    }])
})

app.listen(5000);