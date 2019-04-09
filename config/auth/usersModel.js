const db = require('../../data/dbConfig');

module.exports = {addUser, findAuthId, findUser};

async function addUser(user) {
    const [id] = await db('users').insert(user)
    console.log(id)
    return db('users').where({userID: id}).first()
}
function findAuthId(authId) {
    return db('users').where({authID: authId}).first()
}
function findUser(id) {
    return db('users').where({userID: id}).first()
}
