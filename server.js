var http = require('http');
var fs = require('fs');

var url;

http.createServer(function(request, response) {
    console.log(`Request URL: ${request.url}`);
    if(request.url.startsWith('/static/')) {
        fs.readFile(request.url.substr(1), (err, data) => {
            if(err) {
                console.log(err);
                response.statusCode = 404;
                response.end();
                return;
            }
            response.end(data);
        });
        return;
    }
    response.end();
}).listen(3000, '127.0.0.1', () => {
    console.log('Server is listening at http://127.0.0.1:3000');
});
