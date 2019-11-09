const http = require('http');
const url = require('url');

function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url);
    if ('/' === parsedUrl.path) {
        res.writeHead(200, '', {'Content-Type': 'text/plain'});
        res.end('bonjour.');
    }

}

const server = http.createServer(handleRequest);
server.listen(8000);