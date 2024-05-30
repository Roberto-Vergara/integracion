const express = require("express");
const axios = require("axios")
const router = express.Router();


router.get("/", async(req,res)=>{
    const infor = await axios.get("http://localhost:3000/platos")
    console.log(infor.data);
    console.log("asdasd");
    res.send("¡Hola desde el servidor!");
})


router.get("/contacto",async(req,res)=>{
    res.render("contacto")
})


router.get("/home",async(req,res)=>{
    console.log(req.session.role);
    res.render("home")
})


router.get("/menu",async(req,res)=>{
    res.render("menu")
})


router.get("/login",async(req,res)=>{
    if(req.session.logged==="si"){
        res.redirect("/home")
    }
    res.render("login")
})


router.get("/logout",(req,res)=>{
    req.session.logged="no";
    res.redirect("/home")
})






router.get("/menu",async(req,res)=>{
    res.render("menu")
})


router.get("/menuComida",async(req,res)=>{
    const infor = await axios.get("http://localhost:3000/data")
    // console.log(infor.data);
    res.render("menucomida",{platos:infor.data})
})


router.get("/registro",async(req,res)=>{
    res.render("registro")
})






module.exports=router;
