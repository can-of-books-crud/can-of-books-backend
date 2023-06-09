'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookHandler = require('./Modules/bookHandler');
const notFound = require('./Modules/notFound');
const verifyUser = require('./Modules/Authorize');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (req, res) => res.status(200).send('Default route is working'));
app.use(verifyUser);

app.get('/books', bookHandler.getBooks);


app.post('/books', bookHandler.addBook);

app.delete('/books/:id', bookHandler.deleteBook);

app.put('/books/:id', bookHandler.updateBook);

app.get('*', notFound);
app.post('*', notFound);
app.delete('*', notFound);

// Catches all of our errors
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
