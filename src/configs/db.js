const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb://aditya:aditya123@cluster0-shard-00-00.2utw4.mongodb.net:27017,cluster0-shard-00-01.2utw4.mongodb.net:27017,cluster0-shard-00-02.2utw4.mongodb.net:27017/?ssl=true&replicaSet=atlas-8g8fh7-shard-0&authSource=admin&retryWrites=true&w=majority");
};
