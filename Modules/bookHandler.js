'use strict';

const Book = require('../Model/book');

const bookHandler = {};

bookHandler.getBooks = function (req, res) {
  Book.find()
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err));
};

bookHandler.addBook = function (req, res, next) {
  const newBook = req.body;
  Book.create(newBook)
    .then(addedBook => res.status(201).send(addedBook))
    .catch(err => next(err));
};

bookHandler.deleteBook = function (req, res, next) {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then(res.status(200).send('deleted book'))
    .catch(err => next(err));
};

bookHandler.updateBook = function (req, res, next) {
  const {id} = req.params;
  const data = req.body;

  Book.findByIdAndUpdate(id, data, {new: true, overwrite: true})
    .then(updatedBook => res.status(200).send(updatedBook))
    .catch(err => next(err));
}

module.exports = bookHandler;
