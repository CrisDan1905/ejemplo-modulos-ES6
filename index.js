const express = require('express');
const app = express();

const onRequest = (req, res) => {
    res.send()
};

app.use(express.static('./'));

app.get('/', (req, res)=> {
    res.sendfile('./index.html');
    res.send
});

app.listen(3000, () => {console.log('Servidor corriendo en http://localhost:4200/')})
