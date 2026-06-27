const express = require("express");
const app = express();

const {PORT} = require("./example.env.js");

app.use(express.json());

app.get("/", (req, res) => {
    re.send("Helllo..");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});
