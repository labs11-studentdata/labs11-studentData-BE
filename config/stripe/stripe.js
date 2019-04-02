const express = require('express');
const server = express();
const key = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(key);

server.post('/charge', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      source: req.body
    });
    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = server;