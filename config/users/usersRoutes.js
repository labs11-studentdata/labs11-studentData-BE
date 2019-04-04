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
router.get('/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
    const changes = req.body;
    try{
        const user = await users.getUser(user_id);
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

router.put('/:user_id', async (req, res) => {
    const user_id = parseInt(req.params.user_id);
    const updates = req.body;
    console.log('_______________________')
    console.log(updates)
    console.log(updates)
    try{
        const updatedUser = await users.updateUser(user_id, updates)
        console.log(updatedUser)
        res.status(200).json({message: "User updated", updatedUser})
    }
    catch(error){
        res.status(500).json({message: 'We are momentarily having issues!'});
        console.log(error)
    }
})

// GET STUDENTS -- attached to a user
router.get('/:user_id/students', async (req, res) => {
    const user_id = req.params.user_id
    try{
        const students = await users.findSchoolStudents(user_id)
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