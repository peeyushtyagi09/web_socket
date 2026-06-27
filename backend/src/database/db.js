const mongoose = require("mongoose");
const {MongoDB_URI} = require("../../example.env");

const connectDB = async () => {
    try{
        await mongoose.connect(MongoDB_URI);
        console.log("🤐 Database is successfully connected to server 🤐");
    }catch(err) {
        console,log("❌ Some Error in connecting Database to server ❌")
    }
};

module.exports = {
    connectDB
};