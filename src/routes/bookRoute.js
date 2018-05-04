const express = require('express');

const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Fiction',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'Romeo and Juliet',
    genre: 'Romance',
    author: 'Shakesphere',
    read: false
  },
  {
    title: 'Journey of a thousand miles',
    genre: 'True life',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'Americana',
    genre: 'Drama',
    author: 'Chimamanda Adichie',
    read: false
  },
  {
    title: 'Americana',
    genre: 'Drama',
    author: 'Chimamanda Adichie',
    read: false
  },
  {
    title: 'Americana',
    genre: 'Drama',
    author: 'Chimamanda Adichie',
    read: false
  },
  {
    title: 'Americana',
    genre: 'Drama',
    author: 'Chimamanda Adichie',
    read: false
  }
];
bookRouter.route('/').get((req, res) => {
  res.render('books', {
    nav: [
      { link: '/books', title: 'Books' },
      { link: '/authors', title: 'Authors' }
    ],
    title: 'Library',
    books
  });
});
bookRouter.route('/single').get((req, res) => {
  res.send('Hello single');
});

module.exports = bookRouter;
