const http = require('http');
const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    console.log('Server request', req.method, req.url)

    // res.setHeader('Content-Type', 'text/plain');
    //
    // res.write('OK 200');
    // res.end();

    res.setHeader('Content-Type', 'application/json');

    const data = JSON.stringify([
        {id: 1, name: "John"},
        {id: 2, name: "Peter"},
    ]);
    res.end(data);
});

server.listen(port, host, (error) => {
    error ?
        console.log(error) :
        console.log('Listening to port '  + port);
});
