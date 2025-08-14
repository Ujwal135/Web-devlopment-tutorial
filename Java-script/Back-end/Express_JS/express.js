const express = require("express");
const app = express();
const port = 3000;

/*
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
*/

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hi this is ujjwal Dandge </h1>");
});

app.get("/profile/:username",(req,res)=>{
  res.send(`Hello Welcome to profile  ${req.params.username}...`)
})
*/

// code for ejs
app.use(express.static("./public"));  /// set up for to use public directry
app.set("view engine","ejs")


app.get("/",(req,res)=>{
  res.render("index") 
})

app.get("/",(req,res)=>{
  throw Error("Please Check server connection ")
})
app.get("/error",(res,req,next)=>{
  throw Error("Something went wrong");
  
})



app.get("/contact",(req,res)=>{
  res.render("contact",{name: "Ujjwal"}) 
})

// error handler 

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
