const express = require("express");
const app = express()
const inventory = require("./routes/inventory")


app.use(express.json)
app.use("/inventory", inventory)

module.exports = app;