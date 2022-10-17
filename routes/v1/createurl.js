const express = require('express');
var router = express.Router();
//https://api.hypeds.com/v5/db/get//gay
//req.params.id

module.exports = (db) => {
  router.post('/', function(req, res) {

  let random = '';
  let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
  for(var i = 0; i < 6; i++) {
    random = random + dict.charAt(Math.floor(Math.random() * dict.length));
  }

  let randomURLID = `U${random}`;
  
  res.send(`Sucesso! URL criada: https://e.hypeds.com/r/${randomURLID}`)
  db.set(`url_${randomURLID}`, req.body.url)
  });

  router.get('/', function(req, res) {
    res.sendFile("/home/runner/Hyped-Url-Shortener/createurl.html");
  })
  return router;
}