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