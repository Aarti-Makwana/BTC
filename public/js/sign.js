// var days = document.getElementById("days").value;
//     if(days<=0)
//     {
//         // `<div class="alert alert-danger" role="alert">
//         //      Invalid  Day Plz re-Entre
//         // </div>`;
//         alert("Invalid day");
//     }
//     else{
        
//     }

const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult} = require('express-validator');
const ejs= require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.json());
app.get('/sign',(req,res)=>{
    res.render("/")
})
