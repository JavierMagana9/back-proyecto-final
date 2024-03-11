const express=require('express')
const router=express.Router()

const {createSession}=require('../controllers/paymentController')
const {createSessionSub,verSubscriptores}=require('../controllers/suscriptionController')
const {controlPago}=require('../controllers/webHookStripe')

router.post("/create-checkout-session",createSession)

router.get("/create-checkout-session-sub",createSessionSub)

router.get("/ver-subscriptores",verSubscriptores)

router.get("/success",(req,res)=>{
    res.send("se realizo la compra")
})

router.get("/cancel",(req,res)=>{
    res.send("compra cancelada")
})


router.post("/webhook", express.raw({type: 'application/json'}),controlPago)

router.get("ver-pago",controlPago)

module.exports=router



