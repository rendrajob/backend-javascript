const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello digistar');
        res.end();
    }

    if(req.url === '/api/mentes'){
        res.write(JSON.stringify([{id: 1, name: 'Agus'}, {id: 2, name: 'Budi'}]));
        res.end();
    }
});

server.listen(3001);

console.log('listening on port 3001...');
