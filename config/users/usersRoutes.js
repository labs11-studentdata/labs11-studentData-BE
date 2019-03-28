const express = require('express');
const router = express();
const users = require('./userModel');

router.get('/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
    const changes = req.body;
    try{
        const user = await users.getUser(user_id);
        res.status(200).json({message: "User Found", user});
    }
    catch(error){
        res.status(500).json({message: 'We are momentarily having issues!'});
    }
})

router.put('/:user_id', async (req, res) => {
    const user_id = req.params.user_id;
    const updates = req.body;
    console.log(updates)
    try{
        const updatedUser = await users.updateUser(user_id, updates)
        console.log(updatedUser)
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router