const express = require('express');
const db = require('quick.db')
var router = express.Router();

//req.params.id

router.get('/:url', function(req, res) {

  let random = '';
  let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
  for(var i = 0; i < 6; i++) {
    random = random + dict.charAt(Math.floor(Math.random() * dict.length));
  }

  let randomURLID = `U${random}`;
  
  res.send(`Sucesso! URL criada: https://e.hypeds.com/r/${randomURLID}`)
  db.set(`url_${randomURLID}`, req.params.url)
});

router.get('/', function(req, res) {
  res.send("Escreva a sua URL para ser encurtada! Exemplo: https://e.hypeds.com/createurl/www.hypeds.com ")
})

module.exports = router;