'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema ({
    title: String,
    description: String, 
    status: Boolean  
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;