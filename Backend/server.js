import express from 'express';
const app=express();
const port=5000
app.get("/",(req, res)=>{
    res.send("Welcome to hosel and fee managment")
})
app.listen(port,()=>{
    console.log("server started on port 8000 changed asdjhsjdssjdfhasuj")
})