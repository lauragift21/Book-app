const express = require('express');

const bookRouter = express.Router();

function router(nav) {
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
      title: 'Bad and Boudjie',
      genre: 'Thriller',
      author: 'Ngozi Adichie',
      read: false
    }
  ];
  bookRouter.route('/').get((req, res) => {
    res.render('bookListView', {
      nav,
      title: 'Library',
      books
    });
  });
  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    res.render('bookView', {
      nav,
      title: 'Library',
      book: books[id]
    });
  });
  return bookRouter;
}

module.exports = router;
