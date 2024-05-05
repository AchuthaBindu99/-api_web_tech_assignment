const mongoose = require("mongoose");


const schema = mongoose.schema({
    inventory_id: {type : String },
    inventory_type :{type : String },
    item_name :{type : String }, 
    available_quantity:{type : Number }
});
const Inventory_Table = new mongoose.model("Inventory Table",schema)




module.exports = Inventory_Table