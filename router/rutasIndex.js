const express = require("express");
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
    res.render("home")
})

router.get("/menu",async(req,res)=>{
    res.render("menu")
})

router.get("/login",async(req,res)=>{
    res.render("login")
    
})


router.get("/menu",async(req,res)=>{
    res.render("menu")
})

router.get("/menuComida",async(req,res)=>{
    res.render("menucomida")
})

router.get("/registro",async(req,res)=>{
    res.render("registro")
})

module.exports=router;