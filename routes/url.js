const express = require('express');
const db = require('quick.db')
var router = express.Router();  

router.get('/:id', function(req, res) {
  let url = db.get(`url_${req.params.id}`)
  console.log(req.params.id)
  
  //if(!url) url = "https://e.hypeds.com/"
  let urls = "https://" + url
  res.redirect(url)
});

router.get('/', function(req, res) {
  res.send("Escreva o ID da URL! Exemplo: ")
})

module.exports = router;