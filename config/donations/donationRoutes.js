const express = require('express');
const server = express();

const knex = require('knex');

const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

//view all donations
server.get('/', (req, res) => {

    db.select().from('donations')
        .then(donations => {
            res.status(200).json(donations);
        })
        .catch(err => {
            res.status(500).json({ error: "Couldn't get list of donations."})
        })
});

//view all donations by one member
server.get('/user/:id', (req, res) => {

    const { id } = req.params;

    db('donations')
    .where({user_ID: id})
    .then(donation => {
        if (donation) {
            res.status(200).json(donation);
        } else {
            res.status(404).json({ message: 'No donations by a board member with the specified ID exist.' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: "Couldn't get the requested donations; please try again." });
    })
});

server.post('/', (req, res) => {
    db('donations').insert(req.body)
        .then(donation => {
            res.status(201).json(donation)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

module.exports = server