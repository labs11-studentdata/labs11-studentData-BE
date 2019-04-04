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

// get donations for a specific school 

server.get('/school/:id', async (req, res) => {
    const id = req.params.id
    try{
        
        const schoolDonations = await db.select(
            'u.first_name as donor_first',
            'u.last_name as donor_last',
            's.first_name as student_first',
            's.last_name as student_last',
            's.dues',
            'd.donation_total',
            'd.donation_date',
            'd.schoolID'
            ).from('donations AS d').innerJoin('users AS u', "u.user_ID", "d.user_ID").innerJoin('students AS s', 's.student_id', 's.student_id').where('d.schoolID', '=', id)
        const users = await db('users') 
        const students = await db('students')
            console.log(schoolDonations)
        res.status(200).json({schoolDonations})
    }
    catch(error){
        console.log(error)
    }
})
module.exports = server