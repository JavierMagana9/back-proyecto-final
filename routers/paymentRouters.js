const express=require('express')
const router=express.Router()

const {createSession}=require('../controllers/paymentController')
const {createSessionSub}=require('../controllers/suscriptionController')


router.post("/create-checkout-session",createSession)

router.post("/create-checkout-session-sub",createSessionSub)

router.get("/success",(req,res)=>{
    res.send("se realizo la compra")
})

router.get("/cancel",(req,res)=>{
    res.send("compra cancelada")
})


module.exports=router



