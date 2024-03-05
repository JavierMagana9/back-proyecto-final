const Stripe = require('stripe')


const stripe = new Stripe('sk_test_51OmgPMCmZfq7z36s0bbAiXm8l38UGRptqo7bZadRc2n15uVRk3Q385aGzVQrEamDXyNwW12NS987gNxkE53KLGXH00FpKWgMbt')

const createSessionSub = async (req, res) => {

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Sala de ensayo Fija Mensual',
                        description: "para adquirir sala fija"
                    },
                    currency: 'eur',
                    unit_amount:40000, //el precio se coloca en centavos
                },
                quantity: 1,
             
            }
        ],
        mode: 'subscription',
        success_url: 'http://localhost:5173/profile'
    })


    // console.log(session)
    return res.json(session)
}


module.exports = {
    createSessionSub
}