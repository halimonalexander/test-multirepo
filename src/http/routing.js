const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    console.log('Server request', req.method, req.url)

    res.setHeader('Content-Type', 'text/html');

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);
    let basePath;

    switch (req.url) {
        case '/index.html':
        case '/index.php':
            res.statusCode = 301;
            res.setHeader('Location', '/');
            res.end();
            return;
        case '/':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
        case '/contacts':
            basePath = createPath('contacts');
            res.statusCode = 200;
            break;
        case '/tos':
            basePath = createPath('tos');
            res.statusCode = 200;
            break;
        case '/other':
            basePath = createPath('other');
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }

    fs.readFile(basePath, (error, data) => {
        if (error) {
            console.error(`Unable to load file: ${basePath}`, error);
            res.statusCode = 500;
        }

        res.write(error ? 'error' : data)
        res.end();
    });
});

server.listen(port, host, (error) => {
    error ?
        console.log(error) :
        console.log('Listening to port '  + port);
});
