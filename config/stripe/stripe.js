const express = require('express');
const server = express();
const key = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(key);

// function pay(email, amount){

// }

server.post('/charge', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});