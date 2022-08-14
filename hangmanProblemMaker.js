"use strict";
const fs = require("fs");
const words = fs.readFileSync("./words.csv", 'utf-8');

const parsing = (words)=>{
    const medium = words.split("\n").join("").split("\r");
    return medium.filter((e)=>e.length>4 && e.length<10);
}

const problemSet = parsing(words);
console.log(problemSet)