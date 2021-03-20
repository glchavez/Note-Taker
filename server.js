const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Create path to db.json
const dbPath = path.join(__dirname, 'db/db.json');

// HTML ROUTES
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// API ROUTES
app.get('/api/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dbPath));
    return res.json(data);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(newNote);

    let data = JSON.parse(fs.readFileSync(dbPath));
    data.push(newNote);
    console.log(data);

    fs.writeFileSync(dbPath, JSON.stringify(data));
    res.json(newNote);
});

// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});