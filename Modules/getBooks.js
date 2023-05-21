'use strict'

const Book = require('../Model/book');

function getBooks(req, res){
    Book.find()
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err));
}

module.exports = getBooks;