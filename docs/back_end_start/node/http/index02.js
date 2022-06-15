const http = require('http');
const server = new http.Server();

server.on('request', function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('hello nodejs')
})

server.listen(3030, function () {
    console.log('listening in localhost:3030')
})


console.log(server)