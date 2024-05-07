const functions = require('firebase-functions');
const stripeSecretKey = functions.config().stripe.secret;
const stripe = require('stripe')(stripeSecretKey);

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
    try {
        const { amount, description } = JSON.parse(req.body); // Simplify JSON parsing

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            description: description // Ensure parameters match the API expectations
        });

        res.status(200).send(JSON.stringify({ paymentIntent }));
    } catch (error) {
        console.error(error); // Log error to the console
        res.status(400).send(JSON.stringify({ error: error.message })); // Send error message in response
    }
});

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// require("dotenv").config();
// const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

 // import { https } from 'firebase-functions/v2';

// const functions = require('firebase-functions');
// const stripeSecretKey = functions.config().stripe.secret;
// const stripe = require('stripe')(stripeSecretKey);


// exports.handler = async (event) => {
//     try {
//         const { amount } = JSON.parse(event.body);
//         const { description } = JSON.parse(event.body);

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             description,
//             currency: "usd"
//         });

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ paymentIntent })
//         }
//     } catch (error) {
//         alert({ error });
//     }

//     return {
//         status: 400,
//         body: JSON.stringify({ error })
//     }
// }