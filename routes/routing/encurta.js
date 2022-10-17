const { Router } = require('express');
const db = require('quick.db');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.render('encurtando.ejs', {
        title: "Encurte Sua URL"
      })
		});

    this.post('/', function (req, res) {
      let random = '';
      let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
      for(var i = 0; i < 7; i++) {
        random = random + dict.charAt(Math.floor(Math.random() * dict.length));
      }

      let randomURLID = `U${random}`;
      let URL = `https://hpd.ink/r/${randomURLID}`

      let user = req.query.user
      if(!user) user = "User not registered"

      db.set(`url_${randomURLID}`, req.body.url)
      db.set(`URL_User_${randomURLID}`, user)
      db.set(`HaveAds_${randomURLID}`, true)
      return res.render('result.ejs', {
        title: "Sua URL",
        shortenURL: encodeURIComponent(URL),
        shortenURLID: randomURLID,
      })
    })
	}
};

module.exports.page = '/encurta';