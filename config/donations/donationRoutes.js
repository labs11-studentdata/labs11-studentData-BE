const express = require('express');
const server = express();

const db = require('../../data/dbConfig');

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

/* async function altDonations() {
    //let donationsList = []
    const donations = db.select('*').from('donations');
    //const schools = await db.select('*').from('schools');
    //const students = await db.select('*').from('students');
    //const users = await db.select('*').from('users');

    let donation = {

        id,
        donation_amount,
        donation_date,
        user_first_name,
        user_last_name,
        student_first_name,
        student_last_name,
        school_name,

    }

    donations.forEach(function(elem, index) {

        donation[id] = db('donations').select('id').where({id: id}).first();
        donation[donation_amount] = db('donations').select('donation_amount').where({id: id}).first();
        donation[donation_date] = db('donations').select('donation_date').where({id: id}).first();
        donation[user_first_name] = db('users').select('first_name').where({user_ID: user_id}).first();
        donation[user_last_name] = db('users').select('last_name').where({user_ID: user_id}).first();
        donation[student_first_name] = db('students').select('first_name').where({student_id: id}).first();
        donation[student_last_name] = db('students').select('last_name').where({student_id: id}).first();
        donation[school_name] = db('schools').select('school_name').where({schoolID: schoolID}).first();

    }); 

    return donations;
}

server.get('/alt', (req, res) => {

    try{
        const donations = altDonations();
        if(donations) {
            console.log(donations)
            res.status(200).json({message: "Donations", donations})
        } else {
            res.status(404).json({message: "error getting donations list"})
        }
    }
    catch(err) {
        res.status(500).json({ message: 'error getting donations list'})
    }

}); */
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
            ).from('donations AS d').innerJoin('students AS s', 'd.student_id', 's.student_id').innerJoin('users AS u', "d.user_ID", "u.user_ID").where('d.schoolID', '=', id)
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