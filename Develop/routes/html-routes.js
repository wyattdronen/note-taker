const route = require('express').Router();
const path = require('path');
// GET 'index.html'
route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// GET 'notes.html'
route.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
module.export = route;