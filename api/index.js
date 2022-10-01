import express from "express";
const app = express()

app.use(express.json()) //SO that we will be able to send any data to the DB

app.listen(8800,()=>{
    console.log("Connected")
})