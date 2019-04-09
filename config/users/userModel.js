const db = require('../../data/dbConfig');

module.exports = {
    getUser,
    updateUser,
    findSchoolStudents,
    getUsers
}

async function getUsers() {
    const users = await db('users');
    return users
}
async function getUser(userID){
    const user = await db('users').where({userID}).first();
    return user
} 

async function updateUser(userID, updates) {
    const updatedUser = await db('users').update(updates).where({userID});
    console.log(userID)
    console.log(updates)
    console.log(updatedUser)
    const user = await db('users').where({userID}).first()
    return user
}

// return db.table('students').select('*').whereIn(['schoolID']), db.table('schools').select('schoolID').whereIn('schoolID'),

async function findSchoolStudents(user_id) {
    let schoolStudents = []
    const schoolID = await db('users').select('schoolID').where({ id: user_id}).first();
    const school = await db('schools').where({ schoolID: schoolID.schoolID}).first()
    console.log(school)
    const students = await db('students').where({schoolID: schoolID.schoolID})
    const user = await db('users').select('first_name', 'last_name').where({id: user_id}).first();

    schoolStudents = { students: students, school: school, user: user}
    return schoolStudents
}