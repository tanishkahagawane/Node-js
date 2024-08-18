
/*
import {x} from './app.js'

node index.js
SyntaxError: Cannot use import statement outside a module 

This will work in js but not in node
Reason - in Crome version this works with little higer version and browser supports it.
whereas Node uses little old version which doesn't support this.

*/

//Right way
const app = require('./app')

console.log(app) ;   //{ x: 10, y: 20, z: [Function: z] }
console.log(app.z()) ;  //30

//////////////////////

//IMP-INTERVIEW QUEST

const arr=[11,2,5,28,63,3,2,5]

let result = arr.filter((item)=>{
    return item>=11
})
console.log(result)

