const express = require('express');
const server = express();

const knex = require('knex');

const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);


//should return a list of all schools
server.get('/', (req, res) => {

  db.select().from('schools')
    .then(schools => {
      res.status(200).json(schools);
    })
    .catch(err => {
      res.status(500).json(err)
    })

});

//should return a specific school
server.get('/:id', (req, res) => {
  
  const { id } = req.params;

  db.select().from('schools')
    .where({schoolID: id})
    .then(school => {
        if (school) {
            res.status(200).json(school);
        } else {
            res.status(404).json({ message: 'The school with the specified ID does not exist.' })
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

//should add a school, requires school_name and location
server.post('/', (req, res) => {
  
  const school = req.body;

  db.insert(school).into('schools')
    .then(id => {
      res.status(201).json(id)
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

//should update a school, requires schoolID, school_name, and location
server.put('/', (req, res) => {
  
  const school = req.body;

  db('schools').update(school).where({schoolID: school.schoolID})
    .then(updated => {
      res.status(201).json(updated)
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

//should delete a school
server.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('schools').where({schoolID: id})
      .del()
      .then(deleted => {
          if (deleted) {
              res.status(200).json({ message: 'School deleted.'});
          } else {
              res.status(404).json({ message: 'The school with the specified ID does not exist.'})
          }
      })
      .catch(err => {
          res.status(500).json(err);
      })
})

module.exports = server;
