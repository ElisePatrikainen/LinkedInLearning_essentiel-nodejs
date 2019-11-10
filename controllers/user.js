const userRepository = require('../repository/user');

function getAllUsers(req, res) {
    res.writeHead(200, '', {'Content-Type': 'text/html'});
    const users = userRepository.getUsers();
    users.on("data", (data) => res.write(data.name + '</br>'));
    users.on("close", () => res.end());
}

exports.getAllUsers = getAllUsers;