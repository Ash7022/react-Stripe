const e = require("express");

const stripe = require("stripe")("Secretkey")

exports.stripe = async (req,res)=>{
    const{paymentMethodType, currency}= req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount:1999,
            currency:'usd',
        });
        res.json({success:true, clientSecrete:paymentIntent.client_secret});
        // console.log(paymentIntent.client_secret);
    } catch (error) {
        res.status(400).json({error:error});
    }

    
}
// exports.webhooks = async (req, res)=>{
//     const sig = req.headers["stripe-signature"];

//     let event;

//     try {
//         event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);

//     } catch (error) {
//         console.log(`Error message: ${error.message}`);

//         return res.status(400).send(`Webhook Error: ${error.message}`);
//     }
//     if(event.type ==='payment_intent.created'){
//         const paymentIntent = event.data.object;
//         console.log(`[${event.id}]Paymentintent (${paymentIntent.id}): ${paymentIntent.status}`);
//     }
//     if(event.type ==='payment_intent.canceled'){
//         const paymentIntent = event.data.object;
//         console.log(`[${event.id}]Paymentintent (${paymentIntent.id}): ${paymentIntent.status}`);
//     }
//     if(event.type ==='payment_intent.requires_action'){
//         const paymentIntent = event.data.object;
//         console.log(`[${event.id}]Paymentintent (${paymentIntent.id}): ${paymentIntent.status}`);
//     }
//     if(event.type ==='payment_intent.succeeded'){
//         const paymentIntent = event.data.object;
//         console.log(`[${event.id}]Paymentintent (${paymentIntent.id}): ${paymentIntent.status}`);
//     }
//     res.json({received: true });
// };