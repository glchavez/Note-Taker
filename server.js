const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML ROUTES
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// API ROUTES
app.get('/api/notes', (req, res) => {

    const dbPath = path.join(__dirname, 'db.json');
    const data = fs.readFileSync( dbPath, _______)

    res.json(data);
});

app.post('/api/notes', (req, res) => {
const newNote = req.body;
console.log(newNote);

________.push(newNote);
res.json(newNote);
});

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});