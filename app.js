const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve('public');
app.use(express.static(publicPath));

const APP_PORT = process.env.APP_PORT || 3001
app.listen(APP_PORT, () => {
    console.log(`Servidor corriendo en puerto+ ${APP_PORT}`);
});
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'));
});

app.get('/crear-producto', (req, res) => {
    res.sendFile(path.resolve('views/crear-producto.html'));
});
app.get('/views/register.html', (req, res) => {
    res.sendFile(path.resolve('views/register.html'));
});
app.get('/views/login.html', (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
});

app.post('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve('views/login.html'));
});
