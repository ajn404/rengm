const http = require('http');
const server = http.createServer(function (req, res) {
    let data = '';
    req.on('data', function (chunk) {
        data += chunk
    });
    req.on('close', function () {
        let method = req.method;
        let url = req.url;
        let headers = JSON.stringify(req.headers);
        let httpVersion = req.httpVersion;
        res.writeHead(200, {'content-type': 'text/html'});
        let dataHTML = `<p>data:${data}</p>`;
        let methodHTML = `<p>method:${method}</p>`;
        let urlHTML = `<p>url:${url}</p>`;
        let headersHTML = `<p>headers:${headers}</p>`
        let httpVersionHTML = `<p>httpVersion:${httpVersion}</p>`
        let resData 
        = dataHTML + methodHTML + urlHTML + headersHTML + httpVersionHTML;
        res.end(resData);
    })
})
server.listen(4399, function () {
    console.log('来呀，快活呀')
})
