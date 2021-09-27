'use strict';

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const authMiddleware = require('./authMiddleware');

const searchProductsInGoogleShopping = (req, res) => {

    res.status(200).send('Hello Firebase funciton');
}

exports.searchProductsInGoogleShopping = functions.https.onRequest(searchProductsInGoogleShopping);
