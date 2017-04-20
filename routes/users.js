var express = require('express');
var router = express.Router();

var db = require('../models')

/* GET users listing. */

//VIEW ALL USER
router.get('/', function(req, res, next) {
    db.User.findAll({include : { model : db.Book}, order : 'id asc'})
      .then((users)=>{
        // console.log(users[0].Books[0]);
        res.render('listuser', { title : 'USER LIST', users:users });
      })
});

//ADD USER FORM
router.get('/adduser', function(req, res, next) {
    res.render('form_add_user', { title : 'ADD USER' })
});

//ADD USER POST
router.post('/adduser', function(req, res, next) {
  let user = {
    name:req.body.name,
    email:req.body.email
    // photo:req.body.photo
  }
  db.User.create(user)
  .then(()=>{
    res.redirect('/users')
  })
});

//EDIT USER FORM
router.get('/edit/:id', function(req, res, next) {
  db.User.findOne({where : {id : req.params.id}})
    .then((user)=>{
      res.render('form_edit_user', { title:'EDIT USER', user:user })
    })
});

//EDIT USER POST
router.post('/edit/:id', function(req, res, next) {
  let UserUpdate = {
    name:req.body.name,
    email:req.body.email
    // photo:req.body.photo
  }
  db.User.update(UserUpdate, {where : { id : req.params.id }})
  .then(()=>{
    res.redirect('/users')
  })
});

//DELETE USER
router.get('/delete/:id', function(req, res, next) {
  db.User.destroy({ where : {id : req.params.id}})
  .then(()=>{
    res.redirect('/users')
  })
});

module.exports = router;
