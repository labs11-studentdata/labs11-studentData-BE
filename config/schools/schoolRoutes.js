const express = require('express');
const server = express();
/*
    added some basic endpoints for the students table for testing purposes, 
    when we start adding the endpoints for the rest of the tables we can reorganize these all into separate files
*/
const knex = require('knex');

const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

server.get('/api/school', (req, res) => {

  db.select().from('schools')
      .then(schools => {
          res.status(200).json(schools);
      })
      .catch(err => {
          res.status(500).json({ error: "Couldn't get list of schools."})
      })

});

server.get('/api/school/:id', (req, res) => {
  
  const { id } = req.params;

  db('schools')
  .where({schoolID: id})
  .then(school => {
      if (school) {
          res.status(200).json(school);
      } else {
          res.status(404).json({ message: 'The school with the specified ID does not exist.' })
      }
  })
  .catch(err => {
      res.status(500).json({ error: "Couldn't get the requested school; please try again." });
  })
});


