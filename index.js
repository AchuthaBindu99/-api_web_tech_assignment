const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.port || 3005;

mongoose.connect("mongodb://127.0.0.1:27017/")
.then(() => {
    console.log("connected to the database now")
    app.listen(port, () => console.log("app is listening at 3005 port"))
});


