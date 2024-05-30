
//dependencias
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const session = require("express-session")

//mios
const db = require("./omodel/db.js")


//codigo
app.set("view engine","ejs")
app.set("views",__dirname+"/views")


app.use(session({
    secret:"umama",
    resave:true,
    saveUninitialized:true
}))
app.use(express.json()) //sirve para recibir informacion en .json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"))
app.use("/",require("./router/rutasIndex.js"))
app.use("/db",require("./router/admin.js"))
app.use("/pay",require("./router/payment.js"))





app.use((req,res,next)=>{
    res.status(404).send("nop funciono")
})

app.listen(port,()=>{
    console.log("funcionando en el puerto: ",port)
})
