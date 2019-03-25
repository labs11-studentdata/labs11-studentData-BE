const express = require('express');
const server = express();
/*
    added some basic endpoints for the students table for testing purposes, 
    when we start adding the endpoints for the rest of the tables we can reorganize these all into separate files
*/
const knex = require('knex');

const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

//add a new student
server.post('/', (req, res) => {
    const student = req.body;

    db.insert(student).into('students')
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//get all students
server.get('/', (req, res) => {

    db.select().from('students')
        .then(students => {
            res.status(200).json(students);
        })
        .catch(err => {
            res.status(500).json({ error: "Couldn't get list of students."})
        })

});

//get a student by ID
server.get('/:id', (req, res) => {
  
    const { id } = req.params;
    const { student }= req.body;
  
    db('students')
    .where({student_id: id})
    .then(student => {
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'The student with the specified ID does not exist.' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: "Couldn't get the requested student; please try again." });
    })
});

//delete a student
server.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('students').where({ id })
        .del()
        .then(student => {
            if (student) {
                res.status(200).json({ message: 'Student deleted.'});
            } else {
                res.status(404).json({ message: 'The student with the specified ID does not exist.'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to delete student'});
        })
})

module.exports = server;