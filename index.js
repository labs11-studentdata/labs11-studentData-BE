const { server } = require("./server");

// const express = require("express");
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const knex = require('knex');

const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);


//get all students
server.get('/api/students', (req, res) => {

    db.select().from('students')
        .then(students => {
            res.status(200).json(students);
        })
        .catch(err => {
            res.status(500).json({ error: "Couldn't get list of students."})
        })

});


