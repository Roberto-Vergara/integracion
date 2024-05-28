const express = require("express");
const router = express.Router();

const { addUsuario, delUsuario, iniSesion } = require("../omodel/actions");


const con = require("../omodel/db");



router.post("/post",addUsuario);
router.delete("/del",delUsuario);
router.post("/login",iniSesion);


// router.get("/prueba",(req,res)=>{
//     con.query("SELECT * FROM usuarios WHERE email='goku@gmail.com' AND password='goku.09'", function (err, result, fields) {
//         if (err) throw err;
//         // console.log(result[0].id);
//       });

//       res.send("funciono")
// })

module.exports = router;