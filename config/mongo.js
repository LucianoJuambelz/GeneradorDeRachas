require("dotenv").config()
//Mongo DB Atlas config and connect
const mongoose = require("mongoose");
const URI = "mongodb+srv://luchojuambelz:cluster01234@cluster0.56fa6jg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URI, (err) => {
  err ? console.log("[31m " + err) : console.log("[32m  'Mongo Atlas connected ok'");
});
