"use strict";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser")
const routes = require("./routes");
const dotenv = require("dotenv");

dotenv.config()
const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(routes);

app.use(express.static(__dirname + "/public"));

app.get("", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
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
