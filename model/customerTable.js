const mongoose = require("mongoose")


const cusschema = mongoose.schema({
    customer_id :{type : String },
    customer_name: {type : String },
    email :{type : String }
});
const Customer_Table = new mongoose.model("Customer Table",cusschema);

module.exports = Customer_Table;