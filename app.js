const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");
const User = require("./models/user.model")

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// All get route

// Home page --> 

app.get("/",( req,res) => {
    res.sendFile(__dirname + "/viwes/index.html")
} );
// login page --> 

app.get("/login",( req,res) => {
    res.sendFile(__dirname + "/viwes/login.html")
} )
// register page --> 

app.get("/register",( req,res) => {
    res.sendFile(__dirname + "/viwes/register.html")
} )

// profile page --> 

app.get("/profile",( req,res) => {
    res.sendFile(__dirname + "/viwes/profile.html")
});

//log out
app.get("/logout",( req,res) => {
    res.redirect("/")
});



// All post route

app.post("/register" , async (req,res) => {
    try {
     const user = await User.findOne({username : req.body.username})
     if(user){
        res.status(400).send("user already exsist");
     }else{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).redirect("/login")
     }
   
        
    } catch (error) {
        res.status(500).send(error.message)
    }
})



module.exports = app;