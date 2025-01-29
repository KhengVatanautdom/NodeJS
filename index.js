const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js Server!');
});

server.listen(3000, () => {
    console.log('Server running at http://YOUR_EC2_PUBLIC_IP:3000/');
});
