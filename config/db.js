const mongoose = require("mongoose");
require("dotenv").config();
const DBURL = process.env.dbURL;
mongoose.connect(DBURL)
.then(() => { 
    console.log("db is connected successfully")
})
.catch((error) => {
    console.log(error.message)
})