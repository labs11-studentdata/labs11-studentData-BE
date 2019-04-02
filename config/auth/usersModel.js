const db = require('../../data/dbConfig');

module.exports = {addUser, findAuthId, findUser};

async function addUser(user) {
    const [id] = await db('users').insert(user)
    console.log(id)
    return db('users').where({id: id}).first()
}
function findAuthId(authId) {
    return db('users').where({auth_id: authId}).first()
}
function findUser(id) {
    return db('users').where({user_id: id}).first()
}
function findSchoolStudents(user_id, school_id) {
    
}