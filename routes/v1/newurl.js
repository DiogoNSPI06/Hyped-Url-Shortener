const express = require('express');
const hypedDB = require('/home/runner/Hyped-Url-Shortener/hypedDB.js')
const config = require('/home/runner/Hyped-Url-Shortener/config.json')
const db = require('quick.db')
var router = express.Router();  

const hdb = new hypedDB(config.API.token)
//<script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/jquery.js" defer=""></script>
//<script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/nicepage.js" defer=""></script>
router.get('/:uid', function(req, res) {
  res.send(`<!DOCTYPE html>
<html style="font-size: 16px;"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="Encurte sua URL">
    <meta name="description" content="">
    <title>HYPED | Create URL</title>
    <link rel="stylesheet" href="https://www.hypeds.com/css/2nicepage.css" media="screen">
<link rel="stylesheet" href="https://www.hypeds.com/css/Encurta.css" media="screen">
    <link rel="shortcut icon" href="https://static.wixstatic.com/media/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png" type="image/png">
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    
    
    <script type="application/ld+json">{
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "HYPED | Create URL",
		"logo": "https://www.hypeds.com/images/hyped.png"
}</script>
    <meta name="theme-color" content="#478ac9">
    <meta property="og:title" content="Encurta">
    <meta property="og:type" content="website">
  </head>
  <body class="u-body u-xl-mode"><header class="u-clearfix u-grey-75 u-header u-header" id="sec-b08d"><div class="u-clearfix u-sheet u-sheet-1">
        <a href="https://api.hypeds.com/v5/dashboard/login" class="u-image u-logo u-image-1" data-image-width="640" data-image-height="642" title="Home">
          <img src="https://www.hypeds.com/images/hyped.png" class="u-logo-image u-logo-image-1">
        </a>
        <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div class="menu-collapse" style="font-size: 1rem; letter-spacing: 0px; font-weight: 700; text-transform: uppercase;">
            <a class="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
              <svg class="u-svg-link" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-hamburger"></use></svg>
              <svg class="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
</g></svg>
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-nav u-spacing-30 u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/" style="padding: 10px 0px;">Home</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/hypedmusic" style="padding: 10px 0px;">Hyped Music</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/minecraft" style="padding: 10px 0px;">Minecraft</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://www.hypeds.com/docs" style="padding: 10px 0px;">Docs</a>
</li><li class="u-nav-item"><a class="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90" href="https://api.hypeds.com/v5/oauth/login" style="padding: 10px 0px;">Login</a>
</li></ul>
          </div>
          <div class="u-custom-menu u-nav-container-collapse">
            <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com" style="padding: 10px 0px;">Home</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/hypedmusic" style="padding: 10px 0px;">Hyped Music</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/minecraft" style="padding: 10px 0px;">Minecraft</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/docs" style="padding: 10px 0px;">Docs</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://api.hypeds.com/v5/oauth/login" style="padding: 10px 0px;">Login</a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
      </div></header>
    <section class="u-align-center u-clearfix u-grey-60 u-section-1" id="sec-7298">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h2 class="u-text u-text-default u-text-1">Encurte sua URL</h2>
        <div class="u-form u-form-1">
          <form method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style="padding: 10px" source="custom" name="form">
             <div class="u-form-group u-form-name u-label-none">
              <label for="name-3b9a" class="u-label">url</label>
              <input type="text" placeholder="Digite sua URL aqui" id="name-3b9a" name="url" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required>
            </div>
            <div class="u-align-right u-form-group u-form-submit">
              <input type="submit" value="Enviar" class="u-border-none u-btn u-btn-round u-btn-submit u-button-style u-custom-color-2 u-radius-36 u-btn-1" >
            </div>
          </form>
        </div>
      </div>
    </section>
    
    
    <footer class="u-align-center u-clearfix u-footer u-grey-90 u-footer" id="sec-4960"><div class="u-clearfix u-sheet u-sheet-1">
        <p class="u-text u-text-1">Links Úteis&nbsp;<br>
          <span style="font-weight: 400;">
            <a href="https://stats.uptimerobot.com/1BnoXi6Mgp" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-1"> Status Page</a>
          </span>
          <br>
          <span style="font-weight: 400;">
            <a href="https://v4.hypeds.com/api" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-2">API</a>
          </span>
          <br>
          <span style="font-weight: 400;">
            <a href="https://www.hypeds.com/discord" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-custom-color-2 u-btn-3">Discord</a>
          </span>
          <br>
        </p>
        <p class="u-text u-text-2">
          <a href="https://www.hypeds.com/tos" class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-4">TOS</a>
        </p>
        <p class="u-small-text u-text u-text-variant u-text-3">© HYPED GROUP 2022</p>
      </div></footer>
  
</body></html>`)
});

router.post('/:uid', function(req, res) {
  let random = '';
  let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ'
  for(var i = 0; i < 6; i++) {
    random = random + dict.charAt(Math.floor(Math.random() * dict.length));
  }

  let randomURLID = `U${random}`;
  //let urlEncurtada = `https://e.hypeds.com/r/${randomURLID}`\\\\\

  res.redirect(`https://e.hypeds.com/u/${randomURLID}`)

  db.set(`url_${randomURLID}`, req.body.url)
  db.set(`URL_User_${randomURLID}`, req.params.uid)
  hdb.push(`UserUrls_${req.params.uid}`, randomURLID)
});

module.exports = router;