const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to Chorals and Hymns');
    } else if (req.url === '/about') {
        res.end('This is about');
    } else {
        res.end(`
            <h1>Ooopss</h1>
            <p>We couldn't find that page you are looking for</p>
            <a href="/">Back home</a>
        `);
    }
});

server.listen(5000);
