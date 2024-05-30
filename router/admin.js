const express = require("express");
const router = express.Router();


const { addUsuario, delUsuario, iniSesion, addPlato, obtPlatos } = require("../omodel/actions");




const con = require("../omodel/db");


router.post("/post",addUsuario);
router.delete("/del",delUsuario);
router.post("/login",iniSesion);
router.post("/addplato",addPlato);
router.get("/verplatos",obtPlatos)





module.exports = router;
