const express = require("express");
const app = express();
const port = 3000;

app.use(function(req,res,next){

        // req .. request from the client (user → server)
        // res .. response object (server → user)
        console.log("middleware 1 is used ")
        next() //.. passes control to the next middleware or route handler
        
})

app.use(function(req,res,next){

        // req .. request from the client (user → server)
        // res .. response object (server → user)
        console.log("middleware 2 is used ")
        next() //.. passes control to the next middleware or route handler
        
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hi this is ujjwal Dandge ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
