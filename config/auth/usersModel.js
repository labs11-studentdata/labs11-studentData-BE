const db = require('../../data/dbConfig');

module.exports = {addUser, findAuthId, findUser};

async function addUser(user) {
    const [userID] = await db('users').insert(user)
    return db('users').where({userID: userID}).first()
}
function findAuthId(authID) {
    return db('users').where({authID}).first()
}
function findUser(userID) {
    return db('users').where({userID: userID}).first()
}
