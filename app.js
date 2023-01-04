var express =require("express");
var app= express();

app.get('/',(req,res)=>{
    res.send("WELCOME TO RENDER.COM SERVICE, updated data")
  })
   

const port = process.env.PORT || 80;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })
