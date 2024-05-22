
//dependencias
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

//mios
const db = require("./omodel/db.js")


//codigo
app.set("view engine","ejs")
app.set("views",__dirname+"/views")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"))
app.use("/",require("./router/rutasIndex.js"))
app.use("/db",require("./router/admin.js"))





app.use((req,res,next)=>{
    res.status(404).send("nop funciono")
})

app.listen(port,()=>{
    console.log("funcionando en el puerto: ",port)
})
