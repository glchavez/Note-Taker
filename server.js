const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

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

    let oldArray = JSON.parse(fs.readFileSync(dbPath));
    req.body.id = uuidv4();
    oldArray.push(req.body);

    const newArray = JSON.stringify(oldArray);
    fs.writeFileSync(dbPath, newArray);
    res.json(newArray);
});

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    let oldNoteArray = JSON.parse(fs.readFileSync(dbPath));

    const newNoteArray = oldNoteArray.filter(note => note.id !== id);

    const newNoteData = JSON.stringify(newNoteArray);
    var updateDB = fs.writeFileSync(dbPath, newNoteData);
    res.json(updateDB);
});

// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});