const express = require("express");

const { cPayment } = require("../scontroladores/actions");
const router = express.Router();


router.post("/create-checkout-session",cPayment)

router.get("/success",(req,res)=>{
    res.send("productos comprados")
})
router.get("/cancel",(req,res)=>{
    res.redirect("/menu")
})

module.exports=router;
