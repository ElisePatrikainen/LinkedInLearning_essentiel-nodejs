const userController = require('./controllers/user');

function initRouter(app) {
    app.get('/', (req, res) => {
        res.writeHead(200, '', {'Content-Type': 'text/plain'});
        res.end('bonjour.');
    })
    app.get('/users', userController.getAllUsers)
}

exports.initRouter = initRouter;