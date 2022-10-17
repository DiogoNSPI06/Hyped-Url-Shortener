const fs = require('fs');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const expressLayouts = require('express-ejs-layouts');
const logger = require('morgan');

const config = require('./v2/config.json')

class App {
  constructor() {
    this.app = express()
    this.config = config

    this.setup()
    this.routes()

    console.log(`HPD | App Online`)
  }

  setup() {
    this.app.use(express.json())
    this.app.set('view engine', 'ejs');
    this.app.set('views', "/home/runner/Hyped-Url-Shortener/public/views/");
    this.app.use(express.static("/home/runner/Hyped-Url-Shortener/public/css/"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(expressLayouts);
    this.app.use(cookieParser());
    this.app.use(cookieSession({
      name: 'session',
      keys: [config.cookieToken],
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }))

    if(this.config.debug === true) {
      this.app.use(logger('dev'));
    }

    this.app.listen(1337);
  }

  routes() {
    const files = fs.readdirSync(__dirname + '/routing/').filter(file => file.endsWith('.js'));
    for(const file of files) {
      const route = require(__dirname + `/routing/${file}`)

      this.app.use(route.page, new route.Router());
    }
  }
}

module.exports = App;