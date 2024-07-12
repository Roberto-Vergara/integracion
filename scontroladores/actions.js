const axios = require("axios");
const con = require("../omodel/db");

const {  Stripe } = require("stripe");

// vacio para que no funcione y force error
const stripe= new Stripe("");

const cLogin =async(req, res)=>{
    if(req.session.logged==="si"){
        res.redirect("/menu")
    }
    res.render("login")
}

const cMenuCo =async(req, res)=>{
    const infor = await axios.get("http://localhost:3000/data")
    // console.log(infor.data);
    res.render("menucomida",{platos:infor.data})
}

const cPedidos =async(req, res)=>{
    console.log("llego");
    let nuevosPlatos=[];
    if (req.session.role !== "admin") {
        res.redirect("/login");
    } else {
        con.query(`SELECT * FROM platosComprados`, async(err, result) => {
            if (err) {
                console.log("Algo salió");
            }
            const promises = result.map(async (element) => {
                const infor = await axios.get(`http://localhost:3000/data/${element.idCom}`)
                return infor.data;
            });
            nuevosPlatos = await Promise.all(promises); //importante ya que al manejarse con promesas va a esperar a que todas terminen para funcionar esto puede producir un pequeño retraso
            // console.log(nuevosPlatos);
            res.render("pedidos",{platos:nuevosPlatos});
        });  
    }
}

const cPlatoCom =async(req, res)=>{
    console.log(req.body);
    req.body.forEach(ele => {
        con.query(`INSERT INTO platosComprados (idCom) VALUES ('${ele.id}')`,(err, result)=>{
            if (err) throw `algo salio mal ${err}`;
            console.log("1 id de plato agregado");
            console.log(result);
        })
    });
    
}

const cDeli =async(req, res)=>{
    if (req.session.role === "repartidor" || req.session.role === "admin") {
        res.render("delivery");
    } else {
        res.redirect("/login");
    }
}

const cPayment =async(req,res)=>{
    const session =  await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                    product_data:{
                        name:"Spaghetti a la bolognesa",
                        description:"asd"
                    },
                    currency:"usd",
                    unit_amount:20000
                },
                quantity:1
            },
            {
                price_data:{
                    product_data:{
                        name:"Sushi de salmón",
                        description:"asd"
                    },
                    currency:"usd",
                    unit_amount:21000
                },
                quantity:1
            },
            {
                price_data:{
                    product_data:{
                        name:"Hamburguesa con queso",
                        description:"asd"
                    },
                    currency:"usd",
                    unit_amount:22000
                },
                quantity:1
            }
        ],
        mode:"payment",
        success_url:"http://localhost:8000/pay/success",
        cancel_url:"http://localhost:8000/pay/cancel"
    })
    return res.json(session)
}


module.exports = {
    cLogin,cMenuCo,cPedidos,cPlatoCom,cDeli,cPayment
}