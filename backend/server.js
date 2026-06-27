const express = require("express");
const app = express();
const { connectDB } = require("./src/database/db");
 
const {PORT} = require("./example.env.js");

app.use(express.json());

app.get("/", (req, res) => {
    re.send("Helllo..");
})


// connectDb
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});
