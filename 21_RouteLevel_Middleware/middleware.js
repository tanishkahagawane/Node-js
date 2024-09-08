//middleware

module.exports= reqFilter=(req,resp,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        resp.send("Please provide age")
    }else if(req.query.age<18){
        resp.send("You can not access this page")
    }else{
        next(); // Pass control to the next middleware function
    }
    
}

//works for http://localhost:5000/users?age=20
// app.use(reqFilter)