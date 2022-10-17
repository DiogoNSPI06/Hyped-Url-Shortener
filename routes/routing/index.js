const { Router } = require('express');
const db = require('quick.db');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {
			return res.render('index.ejs', {
        title: "ShortIt",
      })
		});
	}
};

module.exports.page = '/';
