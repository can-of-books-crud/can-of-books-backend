'use strict';

const Book = require('../Model/book');

const bookHandler = {};

bookHandler.getBooks = function (req, res) {
  let queryObject = {email: req.user.email};
  Book.find(queryObject)
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err));
};

bookHandler.addBook = function (req, res, next) {
  const newBook = req.body;
  Book.create({...newBook, email: req.user.email})
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

  Book.findByIdAndUpdate(id, {...data, email: req.user.email}, {new: true, overwrite: true})
    .then(updatedBook => res.status(200).send(updatedBook))
    .catch(err => next(err));
}

module.exports = bookHandler;
