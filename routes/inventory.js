const express = require("express");
const inventory = express.Router();
const Inventory_Table = require("../model/inventory")
const Customer_Table = require("../model/customerTable")
const orderTable = require("../model/orderTable")
inventory.post("/inv", async (req,resp) => {
    try{
        const data = await Inventory_Table.save();
        resp.send({data : data})
    }catch(error){
      resp.send({message : error.message})
    }
})
inventory.post("/cus", async (req,resp) => {
    try{
        const data = await Customer_Table.save();
        resp.send({data : data})
    }catch(error){
      resp.send({message : error.message})
    }
})
inventory.post("/order", async (req,resp) => {
    try{
        const data = await orderTable.save();
        resp.send({data : data})
    }catch(error){
      resp.send({message : error.message})
    }
})

inventory.get("/", async (req,resp) => {
    try{
      const data = await Inventory_Table.find()
      resp.send({data:data})
    }catch(error){
      resp.send({message : error.message})
    }
})

inventory.get("/customer", async (req,resp) => {
    try{
        const data = await Customer_Table.find()
        resp.send({data : data})
    }catch(error){
        resp.send({message:error.message});
    }
})

inventory.get("/ord", async(req,resp) => {
    try{
        const data = await orderTable.find()
        resp.send({data:data})
    }catch(error){
        resp.send({message:error.message});
    }

    if(quantity === 0){
        resp.send({message: "Item is out of stock"})
    }
})