const db = require('../../data/dbConfig');

module.exports = {
    getUser,
    updateUser
}

async function getUser(id){
    const user = await db('users').where({id}).first();
    return user
} 

async function updateUser(id, updates) {
    const updatedUser = await db('users').update(updates).where({id : id});
    console.log(id)
    console.log(updates)
    console.log(updatedUser)
    const user = await db('users').where({id: id}).first()
    return user
}

