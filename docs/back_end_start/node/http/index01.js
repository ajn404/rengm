const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text-plain'});
    res.end('hello nodejs')
})

server.listen(3010, function () {
    console.log('listening port 3010')
})
