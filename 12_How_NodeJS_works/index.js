console.log("Start");

setTimeout(()=>{
    console.log(" 2 second log")
},2000)

setTimeout(()=>{
    console.log(" 0 second log")
},0)

console.log("completed");

// op-
// Start
// completed
//  0 second log
//  2 second log

/*setTimeout - is part of c++ 
             - registers in Node APIs
             - then resgisters in CallbackQueue 
             - once CallStack is clear then its excuted in callstack
*/

/*
At this point let's assume that setTimeout, the one that has a zero second delay, finishes.
When it finishes, it's not going to get executed right away; it's going to take that callback and move it down into the Callback Queue.
The Callback Queue is all the callback functions that are ready to get fired. In the previous screenshot, we move the function from Node API into the Callback Queue. Now the Callback Queue is where our callback functions will wait; they need to wait for the Call Stack to be empty.
When the Call Stack is empty we can run the first function. There's another function ...

*/