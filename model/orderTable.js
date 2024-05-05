const mongoose = require("mongoose");


const orderschema = mongoose.schema({
    customer_id: {type : String },
    inventory_id :{type : String },
    item_name :{type : String }, 
    quantity:{type : Number }
});
const orderTable = new mongoose.model("Order Table",orderschema)




module.exports = orderTable;

//customer_id, inventory_id,item_name, quantity