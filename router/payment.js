const express = require("express");
const {  Stripe } = require("stripe");
const router = express.Router();

const stripe= new Stripe("sk_test_51PL9RAIxU4RuUg67wTZT8oGGg6d0vxKnoVjILQqbE7lnscTXwsn0IhCQLLA2eOHlsIJlELhjjRBER2JTkgWNiT2F00kHr91uUd");

router.post("/create-checkout-session", async(req,res)=>{
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
})
router.get("/success",(req,res)=>{
    res.send("productos comprados")
})
router.get("/cancel",(req,res)=>{
    res.redirect("/menu")
})

module.exports=router;
