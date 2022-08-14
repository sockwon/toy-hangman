"use strict";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require("./routes");

const dotenv = require("dotenv");
dotenv.config()

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(routes);

app.get("", (req,res)=>{
    res.sendFile("/Users/lsw4u/Desktop/toy/hangman/toy-hangman/index.html");
})

const PORT = process.env.PORT;

app.get("/ping", (req,res)=>{
    res.json({message : 'pong'})
})

const start=()=>{
    try{
        app.listen(PORT, ()=>console.log(`server is listening on ${PORT}`))
    }catch(err){
        console.error(err)
    }
}


start();
