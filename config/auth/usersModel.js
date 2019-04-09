const db = require('../../data/dbConfig');

module.exports = {addUser, findAuthId, findUser};

async function addUser(user) {
    const [id] = await db('users').insert(user)
    console.log(id)
    return db('users').where({id: id}).first()
}
function findAuthId(authID) {
    return db('users').where({authID}).first()
}
function findUser(id) {
    return db('users').where({user_id: id}).first()
}
