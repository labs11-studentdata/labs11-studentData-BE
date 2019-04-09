const express = require('express');
const router = express();
const users = require('./userModel');


router.get('/', async (req,res) => {
    try {
        const users3= await users.getUsers()
        res.status(200).json({ users3 })
    }
    catch(error){
        console.log(error)

    }
})
router.get('/:userID', async (req, res) => {
    const userID = req.params.userID;
    const changes = req.body;
    try{
        const user = await users.getUser(userID);
        if(user) {
            res.status(200).json({message: "User Found", user});
        } else {
            res.status(400).json({message: "User not found"})
        }
    }
    catch(error){
        res.status(500).json({message: 'We are momentarily having issues!'});
    }
})

router.put('/:userID', async (req, res) => {
    const userID = parseInt(req.params.userID);
    const updates = req.body;
    console.log('_______________________')
    console.log(updates)
    console.log(updates)
    try{
        const updatedUser = await users.updateUser(userID, updates)
        console.log(updatedUser)
        res.status(200).json({message: "User updated", updatedUser})
    }
    catch(error){
        res.status(500).json({message: 'We are momentarily having issues!'});
        console.log(error)
    }
})

// GET STUDENTS -- attached to a user
router.get('/:userID/students', async (req, res) => {
    const userID = req.params.userID
    try{
        const students = await users.findSchoolStudents(userID)
        if(students) {
            console.log(students)
            res.status(200).json({message: "Student Info", students})
        } else {
            res.status(404).json({message: "There is an issue with the information entered!"})
        }
    }
    catch(err) {
        res.status(500).json({ message: 'Internal Error, we are working on the issue!'})
    }
})

module.exports = router