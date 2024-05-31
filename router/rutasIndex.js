const express = require("express");
const axios = require("axios")
const router = express.Router();


router.get("/login",async(req,res)=>{
    if(req.session.logged==="si"){
        res.redirect("/menu")
    }
    res.render("login")
})



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


router.get("/menuComida",async(req,res)=>{
    const infor = await axios.get("http://localhost:3000/data")
    // console.log(infor.data);
    res.render("menucomida",{platos:infor.data})
})


router.get("/registro",async(req,res)=>{
    res.render("registro")
})


router.get("/delivery",(req,res)=>{
    if (req.session.role === "repartidor" || req.session.role === "admin") {
        res.render("delivery");
    } else {
        res.redirect("/login");
    }
})

router.get("/pedidos", (req, res) => {
    console.log("llego");
    if (req.session.role !== "admin") {
        res.redirect("/login");
    } else {
        res.render("pedidos");
    }
});





module.exports=router;
