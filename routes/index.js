var express = require('express');
var router = express.Router();

var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Book.findAll()
    .then((books)=>{
      db.User.findAll()
      .then((users)=>{
        res.render('index', { title : 'BOOK LIST', books:books, users:users });
      })
    })
});

//ADD BOOK FORM
router.get('/addbook', function(req, res, next) {
  res.render('form_add_book', { title : 'ADD BOOK' })
});

//ADD BOOK POST
router.post('/addbook', function(req, res, next) {
  let book = {
    title:req.body.title,
    desc:req.body.desc,
    photo:req.body.photo,
    stock:req.body.stock
  }

  db.Book.create(book)
  .then(()=>{
    res.redirect('/')
  })
});

//DELETE BOOK
router.get('/delete/:id', function(req, res, next) {
  db.Book.destroy({ where : {id : req.params.id}})
  .then(()=>{
    res.redirect('/')
  })
});


//BUY BOOK
router.get('/buy/:id/:stock', function(req, res, next) {
  let stockUpdate = req.params.stock - 1
  db.Book.update({stock:stockUpdate}, {where : {id : req.params.id}} )
  .then(()=>{
    res.redirect('/')
  })
});

//EDIT BOOK FORM
router.get('/edit/:id', function(req, res, next) {
  db.Book.findOne({where : {id : req.params.id}})
    .then((book)=>{
      res.render('form_edit_book', { title:'EDIT BOOK', book:book })
    })
});

//EDIT BOOK POST
router.post('/edit/:id', function(req, res, next) {
  let BookUpdate = {
    title:req.body.title,
    desc:req.body.desc,
    photo:req.body.photo,
    stock:req.body.stock
  }
  db.Book.update(BookUpdate, {where : { id : req.params.id }})
  .then(()=>{
    res.redirect('/')
  })
});



module.exports = router;
