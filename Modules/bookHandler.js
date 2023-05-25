'use strict';

const Book = require('../Model/book');

const bookHandler = {};

bookHandler.getBooks = function (req, res) {
  Book.find()
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err));
};

bookHandler.addBook = function (req, res) {
  const newBook = req.body;
  Book.create(newBook)
    .then(addedBook => res.status(201).send(addedBook))
    .catch(err => res.status(400).send(err));
};

bookHandler.deleteBook = function(req, res) {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then(res.status(200).send('deleted book'))
    .catch(err => res.status(500).send(err));
};

module.exports = bookHandler;
