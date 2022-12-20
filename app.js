var express =require("express");
var app= express();

app.get('/',(req,res)=>{
    res.send("WELCOME TO RENDER.COM SERVICE, updated")
  })
   

const port = process.env.PORT || 5000;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })
