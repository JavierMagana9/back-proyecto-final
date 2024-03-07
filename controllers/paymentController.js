const Stripe = require('stripe')


const stripe = new Stripe('sk_test_51OmgPMCmZfq7z36s0bbAiXm8l38UGRptqo7bZadRc2n15uVRk3Q385aGzVQrEamDXyNwW12NS987gNxkE53KLGXH00FpKWgMbt')

const createSession = async (req, res) => {

const number=req.body
const {numero}=req.body

console.log("numero del front",number)
console.log("numero del front",numero)
console.log("numero del front",numero*30)
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Alquiler Sala de Ensayo',
                        description: "Esta es la descripcion de la sala de ensayo"
                    },
                    currency: 'eur',
                    unit_amount: numero*3000, //el precio se coloca en centavos
                },
                quantity: 1,
                // metadata:{
                //     dateStart:"02-03-2024",
                //     dateEnd:"03-02-2024"
                // }
            }
        ],
        mode: 'payment', // aca se puede cambiar por subscripcion
        success_url: 'http://localhost:5173/profile'
    })

    // const customer = await stripe.customers.create({
    //     metadata: {
    //         dateStart: "02-03-2024",
    //         dateEnd: "03-03-2024"
    //     }


    // })

    console.log(session)
    // console.log(customer)
    return res.json(session)
}


module.exports = {
    createSession
}