const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());


// Home page --> 
app.get("/",( req,res) => {
    res.sendFile(__dirname + "/viwes/index.html")
} )




module.exports = app;