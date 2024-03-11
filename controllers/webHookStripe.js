const Stripe = require('stripe')


const stripe = new Stripe('sk_test_51OmgPMCmZfq7z36s0bbAiXm8l38UGRptqo7bZadRc2n15uVRk3Q385aGzVQrEamDXyNwW12NS987gNxkE53KLGXH00FpKWgMbt')


const endpointSecret = "whsec_eJ530G8qxCF7as0gqpPjaFjDM1lDX9fv"




const controlPago = async (req, res) => {

    const body = await req.body

    console.log(body)

console.log("sacando cosas stripe",body.data.object)

return res.status(200).json({
    error: false,
    data:body.data.object
})
    //  const headerlist = req.headers
    //  const sig=await headerlist.get('stripe-signature')

    //  console.log(sig)

    // let event;
    // try {
    //     event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    //   } catch (err) {
    //     response.status(400).send(`Webhook Error: ${err.message}`);
    //     return;
    //   }
    
    //   switch (event.type) {
    //     case 'checkout.session.completed':
    //       const checkoutSessionCompleted = event.data.object;
    //       // Then define and call a function to handle the event checkout.session.completed
    //       break;
    //       default:
    //         console.log(`Unhandled event type ${event.type}`);
    //     }
      

}


const verpago=async(req,res)=>{

    const subscriptions = await stripe.subscriptions.list({
        limit: 3,
      });

      
      return res.json(subscriptions)

}

module.exports={
    controlPago
}
