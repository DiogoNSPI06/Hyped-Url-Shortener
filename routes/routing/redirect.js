const { Router } = require('express');
const db = require('quick.db');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

    this.get('/', function (req, res) {
      return res.redirect(`https://hpd.ink`)
    })

		this.get('/:id', function (req, res) {
      let haveAds = db.get(`HaveAds_${req.params.id}`)
      let adImageUrl = "https://beta.hypeds.com/css/images/Hyped1.png"
      let redirectURL = db.get(`url_${req.params.id}`)
      db.add(`Uses_${req.params.id}`, 1)
  
      if(haveAds !== true) {
        res.redirect(redirectURL)
        db.add(`Uses_${req.params.id}`, 1)
        return
      } else {
        return res.render('redirect.ejs', {
        title: "Redirecionando . . .",
        redirectURL: redirectURL,
        adImageUrl: adImageUrl,
        })
      }
      
			
		});

    this.get('/:id/info', function (req, res) {
      let usos = db.get(`Uses_${req.params.id}`)
      let haveAds = db.get(`HaveAds_${req.params.id}`)
      let redirect = db.get(`url_${req.params.id}`)
      let urlOwner = db.get(`URL_User_${req.params.id}`)
      if(!urlOwner) urlOwner = "Anonymous user"
      if(!haveAds) haveAds = "false"
  
      res.json({ uses: usos, redirect: redirect, haveAds: haveAds, owner: urlOwner })
    })
	}
};

module.exports.page = '/r/';