import express from 'express';
const app=express();
const port=5000
app.get("/",(req, res)=>{
    res.send("Welcome to student accomodation")
})
app.listen(port,()=>{
    console.log("server started on port 9000")
})