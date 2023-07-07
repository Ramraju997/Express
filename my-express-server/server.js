const express = require('express'); //imported express

const app = express(); // initialized express server

app.get("/", (req, res)=> {
    res.send("<h1>Hello World</h1>");
})

app.get("/home",(req,res)=> {
    res.send("<h1>Welcome to the Home page</h1>")
})

app.listen(3000, ()=>{ // created the server to listen to port 3000
    console.log("server started at port 3000"); 
});


