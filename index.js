// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const onRequest = (req, res) => {
//     console.log('peticion realizada');
//     res.writeHead(200, {"Content-Type": "text/html"});
//     const html = fs.readFileSync('./index.html', 'utf8');
//     console.log(res)
//     res.write(html)
//     res.end();
// }

// const server = http.createServer(onRequest);

// server.listen(4200);

// console.log('Servidor corriendo en http://localhost:4200/');

const express = require('express');
const app = express();

const onRequest = (req, res) => {
    res.send()
}
app.use(express.static('./'));
app.get('/', (req, res)=> {
    res.sendfile('./index.html');
    res.send
});

app.listen(4200, () => {console.log('Servidor corriendo en http://localhost:4200/')})