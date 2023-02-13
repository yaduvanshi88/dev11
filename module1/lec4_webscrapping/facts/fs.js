

// In DEV_PP11 folder
// npm init -y
// npm install cheerio

const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");

// html file is loaded in cheerio
let myDocument = cheerio.load(htmlKaData);

// document.querySelector("h1");

// console.log(myDocument);
let h1KaData = myDocument("h1").text();
// console.log(h1Element); element => cheerio => object form me data
 console.log(h1KaData);
 let ptagdata=myDocument("p").text();
 console.log(ptagdata);