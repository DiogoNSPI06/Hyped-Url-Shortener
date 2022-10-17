const express = require('express');
const hypedDB = require('../hypedDB.js')
const config = require('../config.json')
const db = require('quick.db')
var router = express.Router();  

const hdb = new hypedDB(config.API.token)

router.get('/:id', function(req, res) {
  let url = db.get(`url_${req.params.id}`)
  if(!url) return res.send("Escreva um ID válido!")
  db.add(`Uses_${req.params.id}`, 1)
  hdb.add(`Uses_${req.params.id}`, 1)
  
  console.log(req.params.id)
  //let urls = "https://" + url
  res.redirect(url)
});

router.get('/:id/info', function(req, res) {
  let usos = db.get(`Uses_${req.params.id}`)
  let redirect = db.get(`url_${req.params.id}`)
  let urlOwner = db.get(`URL_User_${req.params.id}`)
  if(!urlOwner) urlOwner = "Anonymous user"
  
  res.json({ uses: usos, redirect: redirect, owner: urlOwner })
});

router.get('/', function(req, res) {
  res.send("Escreva o ID da URL! Exemplo: ")
})

module.exports = router;