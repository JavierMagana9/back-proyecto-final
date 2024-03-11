const Stripe = require('stripe')


const stripe = new Stripe('sk_test_51OmgPMCmZfq7z36s0bbAiXm8l38UGRptqo7bZadRc2n15uVRk3Q385aGzVQrEamDXyNwW12NS987gNxkE53KLGXH00FpKWgMbt')

const createSessionSub = async (req, res) => {

    // const prices = await stripe.prices.list()
    
    // console.log(prices.data)

    const session = await stripe.checkout.sessions.create({
        mode:"subscription",
        payment_method_types:["card"],
        line_items: [
            {
                price:'price_1OqdKdCmZfq7z36sRz6BdUiA',
                quantity:1,

            }
        ],
        success_url: 'http://localhost:5173/profile'

    })
    
    console.log(session)
    return res.json(session)
}


const verSubscriptores=async(req,res)=>{

    const subscriptions = await stripe.subscriptions.list({
        limit: 3,
      });

      
      return res.json(subscriptions)

}


module.exports = {
    createSessionSub,
    verSubscriptores
}