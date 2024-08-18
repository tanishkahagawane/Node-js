const http = require('http')

//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

http.createServer((req,resp)=>{
    resp.write("<h1>Hello,This is my code !</h1>");
    resp.end();
}).listen(4500);

/*
The http.createServer() method turns your computer into an HTTP server.

The http.createServer() method creates an HTTP Server object.

The HTTP Server object can listen to ports on your computer and execute a function,
 a requestListener, each time a request is made.

Syntax 

http.createServer(requestListener);

Parameter Values
requestListener -	Optional. Specifies a function to be executed every time the server gets a request.
This function is called a requestListener, and handles request from the user, as well as response back to the user.

 */