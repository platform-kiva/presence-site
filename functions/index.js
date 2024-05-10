const functions = require('firebase-functions');

const cors = require('cors')({origin: true});  // Allows requests from all origins

const stripeSecretKey = functions.config().stripe.key;
const stripe = require('stripe')(stripeSecretKey);

exports.createPaymentIntent = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method === 'OPTIONS') {
            res.status(204).send('');
        } else if (req.method === 'POST') {
            try {

                const { amount, description } = req.body;

                stripe.paymentIntents.create({
                    amount: amount,
                    currency: "usd",
                    description: description
                }).then(paymentIntent => {
                    res.status(200).send({clientSecret: paymentIntent.client_secret});
                }).catch(error => {
                    res.status(400).send({ error: error.message });
                });
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
        } else {
            res.status(405).send('Method Not Allowed');
        }
    });
});
