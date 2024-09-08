const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public')

// console.log(__dirname);   //G:\MY_STUDY\2024\Node-js\16_HTMLPages
//console.log(publicPath);  //G:\MY_STUDY\2024\Node-js\16_HTMLPages\public

app.use(express.static(publicPath))   

//http://localhost:5000/about.html is now accessable
app.listen(5000);