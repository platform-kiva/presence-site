require("dotenv").config();
const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);
        const { description } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            description,
            currency: "usd"
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    } catch (error) {
        alert({ error });
    }

    return {
        status: 400,
        body: JSON.stringify({ error })
    }
}