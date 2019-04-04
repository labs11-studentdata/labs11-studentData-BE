const express = require('express');
const server = express();
/*
    added some basic endpoints for the students table for testing purposes, 
    when we start adding the endpoints for the rest of the tables we can reorganize these all into separate files
*/

const db = require('../../data/dbConfig');

//add a new student
server.post('/', (req, res) => {
    const student = req.body;
    const newStudent = {}
    console.log(student)
    db.insert(student).into('students')
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err)
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

//get list of all students for a certain school
server.get('/school/:schoolID/students/', (req, res) => {
    const { schoolID } = req.params;

    db.select().from('students')
        .where({schoolID})
            .then(students => {
                res.status(200).json(students);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting list of students.' })
            })

})

//get list of all students for a certain grade level at a certain school
server.get('/school/:schoolID/students/:gradeID', (req, res) => {
    const { schoolID, gradeID } = req.params;

    db.select().from('students')
        .where({schoolID: schoolID}).andWhere({gradeID: gradeID})
            .then(students => {
                res.status(200).json(students);
            })
            .catch(err => {
                res.status(500).json({ message: 'Error getting list of students.' })
            })

})

//update a student
server.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    db('students')
    .where({id: id})
    .update(changes)
    .then(student => {
            return res.status(201).json({ message: 'Student information has been updated.'});
    })
    .catch(err => {
        res.json(500).json({ error: "This student's information could not be modified." })
    })
}) 

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