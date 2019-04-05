const express = require('express');
const server = express();
const key = process.env.SECRET_STRIPE_KEY;
const stripe = require('stripe')(key);

const charge = (token, amount) => {
  return stripe.charges.create({
    amount: amount * 100,
    currency: 'usd',
    source: token,
    description: 'Donation'
  })
}

server.post('/', async (req, res) => {
  try {
    let {status} = await charge(req.body.token.id, req.body.amount);
    res.json({message: status});
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = server;