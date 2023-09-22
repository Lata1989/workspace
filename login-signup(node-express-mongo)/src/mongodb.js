const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(() => {
    console.log("MongoDB connected");
})
.catch(() => {
    console.log("Fail to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    }
})


const collection = new mongoose.model("Collection1", LogInSchema);

// Exporto el modulo que necesita index.js
module.exports = collection;