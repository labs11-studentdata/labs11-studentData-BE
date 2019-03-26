const express = require('express');
const server = express();
/*
    added some basic endpoints for the social_worker_visits table for testing purposes, 
    when we start adding the endpoints for the rest of the tables we can reorganize these all into separate files
*/
const knex = require('knex');

const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

//add a new visit
server.post('/', (req, res) => {
    const visit = req.body;

    db.insert(visit).into('social_worker_visits')
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//get all visits for user
server.get('/', (req, res) => {

    db.select().from('social_worker_visits')
        .then(visits => {
            res.status(200).json(visits);
        })
        .catch(err => {
            res.status(500).json({ error: "Couldn't get list of visits."})
        })

});

//get a visit by ID
server.get('/:id', (req, res) => {
  
    const { id } = req.params;
    const { visit }= req.body;
  
    db('social_worker_visits')
    .where({visit_id: id})
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
server.get('/school/:id/social_worker_visits', (req, res) => {
    const { schoolID } = req.params;

    db.select().from('social_worker_visits')
        .where({schoolID: schoolID})
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

    db('social_worker_visits').where({ id })
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
server.put('/', (req, res) => {

    const visit = req.body;
 
    db('social_worker_visits').update(visit).where({visitID: visit.visitID})
     .then(updated => {
       res.status(201).json(updated)
     })
     .catch(err => {
       res.status(500).json({message: 'Unable to update visit'});
     })
 })

module.exports = server;