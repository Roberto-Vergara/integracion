const express = require("express");
const {  Stripe } = require("stripe");
const router = express.Router();

const stripe= new Stripe("sk_test_51PL9RAIxU4RuUg67wTZT8oGGg6d0vxKnoVjILQqbE7lnscTXwsn0IhCQLLA2eOHlsIJlELhjjRBER2JTkgWNiT2F00kHr91uUd");

router.get("/create-checkout-session", async(req,res)=>{
    const session =  await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                    product_data:{
                        name:"goku",
                        description:"asd"
                    },
                    currency:"usd",
                    unit_amount:20000
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
    res.send("su")
})
router.get("/cancel",(req,res)=>{
    res.send("ca")
})

module.exports=router;
