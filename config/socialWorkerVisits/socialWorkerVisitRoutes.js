const express = require('express');
const server = express();
/*
    added some basic endpoints for the social_worker_visits table for testing purposes, 
    when we start adding the endpoints for the rest of the tables we can reorganize these all into separate files
*/
const db = require('../../data/dbConfig');

//add a new visit
server.post('/', (req, res) => {
    const visit = {
        visit_date: req.body.visit_date,
        userID: req.body.userID,
        schoolID: req.body.schoolID,
        notes:req.body.notes
    }

    db.insert(visit).into('social_worker_visits')
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//get a visit by ID
server.get('/:id', (req, res) => {
  
    const { id } = req.params;
  
    db('social_worker_visits')
    .where({visitID, id})
    .then(visit => {
        if (visit) {
            res.status(200).json(visit);
        } else {
            res.status(404).json({ message: 'The visit with the specified ID does not exist.' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: "Couldn't get the requested visit; please try again." });
    })
});


//get list of all visits for a certain school

server.get('/school/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const schoolVisits = await db.select(
            'v.notes',
            'v.visit_date',
            'u.first_name',
            'u.last_name'
        ).from('social_worker_visits AS v').innerJoin('users AS u', 'u.id', 'v.user_id').where('v.schoolID', '=', id)
        res.status(200).json({schoolVisits: schoolVisits})
    }
    catch(error) {
        console.log(error)
        res.status(500).json({message: 'Internal Error. Please try again!'})
    }
    

})

server.get('/school/nojoin/:schoolID', async (req, res) => {
    const {schoolID} = req.params;
    try {
        const schoolVisits = await db('social_worker_visits').where('schoolId', schoolID);
        res.status(200).json({schoolVisits: schoolVisits});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: err, message: err.message});
    }
})

server.get('/user/nojoin/:userID', async (req, res) => {
    const {userID} = req.params;
    try {
        const userVisits = await db('social_worker_visits').where('userID', userID);
        res.status(200).json({userVisits: userVisits});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: err, message: err.message});
    }
})



//get list of all visits for a certain user
server.get('/user/:id', (req, res) => {
    const { id } = req.params;

    db.select().from('social_worker_visits')
        .join('schools', 'social_worker_visits.schoolID', '=', 'schools.schoolID')
        .where({userID: id})
            .then(visits => {
                res.status(200).json(visits);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting list of visits.' })
            })

})

//delete a visit
server.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('social_worker_visits').where({visitID: id })
        .del()
        .then(visit => {
            if (visit) {
                res.status(200).json({ message: 'visit deleted.'});
            } else {
                res.status(404).json({ message: 'The visit with the specified ID does not exist.'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to delete visit'});
        })
})

//update a visit
server.put('/:id', (req, res) => {

    const { id } = req.params;
    const changes = req.body;
 
    db('social_worker_visits')
    .where({visitID: id})
    .update(changes)
     .then(updated => {
       res.status(201).json(updated);
     })
     .catch(err => {
       res.status(500).json({message: 'Unable to update visit'});
     })
 })

//  get the social worker visits for a particular admin 
 server.get('/:userID', async (req, res) => {
    const userID = req.params.userID; 
    try{
        const schoolID = await db('users').select('schoolID').where({userID: userID}).first();
        console.log(schoolID)
        
    }
     catch(error) {
         res.status(500).json({message: "Internal error, cannot get social worker visits for this admin"});
     }
 })
module.exports = server;