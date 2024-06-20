const express = require("express");
const axios = require("axios");
const con = require("../omodel/db");
const { cLogin, cMenuCo, cPedidos, cPlatoCom, cDeli } = require("../scontroladores/actions");
const router = express.Router();


router.get("/login",cLogin)
router.get("/menuComida",cMenuCo)
router.get("/pedidos",cPedidos);
router.post("/platoComprado",cPlatoCom)
router.get("/delivery",cDeli)



router.get("/contacto",async(req,res)=>{
    res.render("contacto")
})


router.get("/home",async(req,res)=>{
    console.log(req.session.role);
    res.render("menu")
})


router.get("/menu",async(req,res)=>{
    res.render("menu")
})

router.get("/logout",(req,res)=>{
    req.session.logged="no";
    res.redirect("/home")
})

router.get("/menu",async(req,res)=>{
    res.render("menu")
})


router.get("/registro",async(req,res)=>{
    res.render("registro")
})










module.exports=router;
