const mongoose = require('mongoose');
const User = mongoose.model('User', { name: String });

function saveUser() {
    const user = new User({ name: 'Elise' });
    user.save().then((data) => console.log(data));
}

function getUsers() {
    return User.find().stream();    // Nb: cas où pas d'utilisateur à gérer
}

function deleteAllUsers() {
    User.deleteMany({}, (err, data) => console.log(data));
}

exports.saveUser = saveUser;
exports.getUsers = getUsers;
exports.deleteAllUsers = deleteAllUsers;