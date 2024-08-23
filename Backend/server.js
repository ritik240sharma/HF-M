import express from 'express';
const app=express();
const port=5000
app.get("/",(req, res)=>{
    res.send("2")
})

app.listen(port,()=>{
    console.log("server started on port 8000 changed asdjhsjdssjdfhasuj")
})