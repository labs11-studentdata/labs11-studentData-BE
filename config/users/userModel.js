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
    const updatedUser = await db('users').update(updates).where({id});
    const user = await db('users').where({id}).first()
    return user
}

