'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Book = require('./Model/book');

async function seed(){
   await Book.create({
    title: 'Dr. Seuss',
    description: 'cat in the hat',
    status: true
   })
    .then(() => console.log('Saved Dr. Seuss book to the DB'))
    .catch(err => console.error(err));

   await Book.create({
    title: 'Percy Jackson',
    description: 'greek gods',
    status: true
   })
   .then(() => console.log('Saved Percy Jackson to the DB'))
   .catch(err => console.error(err));

   await Book.create({
    title: 'Pride & Prejudice',
    description: 'women empowerment',
    status: false
   })
   .then(() => console.log('Saved Pride & Prejudice to the DB'))
   .catch(err => console.error(err));
    
   mongoose.disconnect();
}

seed();