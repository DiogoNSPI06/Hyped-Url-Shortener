const express = require('express');
const db = require('quick.db')
var router = express.Router();  

router.get('/:urlID', function(req, res) {
  const urlRedirected = db.get(`url_${req.params.urlID}`)
  const userID = db.get(`URL_User_${req.params.urlID}`)

  let url = `https://e.hypeds.com/r/${req.params.urlID}`
  
  res.send(`<!DOCTYPE html>
<html style="font-size: 16px;"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="Copie seu URL abaixo:">
    <meta name="description" content="">
    <title>HYPED | Sua URL</title>
    <link rel="stylesheet" href="https://www.hypeds.com/css/2nicepage.css" media="screen">
<link rel="stylesheet" href="https://www.hypeds.com/css/Url_Pronta.css" media="screen">
    <link rel="shortcut icon" href="https://static.wixstatic.com/media/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png" type="image/png">
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="https://www.hypeds.com/js/nicepage.js" defer=""></script>
    <meta name="generator" content="Nicepage 4.13.4, nicepage.com">
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    
    
    <script type="application/ld+json">{
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "",
		"logo": "images/hyped.png"
}</script>
    <meta name="theme-color" content="#478ac9">
    <meta property="og:title" content="Url_Pronta">
    <meta property="og:type" content="website">
  </head>
  <body class="u-body u-xl-mode"><header class="u-clearfix u-grey-75 u-header u-header" id="sec-b08d"><div class="u-clearfix u-sheet u-sheet-1">
        <a href="/" class="u-image u-logo u-image-1" data-image-width="640" data-image-height="642" title="Home">
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
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link" href="https://www.hypeds.com/" style="padding: 10px 0px;">Home</a>
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
      <div class="u-align-left u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h1 class="u-text u-text-default u-text-1">Copie seu URL abaixo:</h1>
        <h4 class="u-text u-text-default u-text-2">https://e.hypeds.com/r/${req.params.urlID}</h4>
        <h1 class="u-text u-text-default u-text-3">QRcode da sua URL:</h1>
        <img class="u-image u-image-default u-preserve-proportions u-image-1" src="https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=${encodeURIComponent(url)}" alt="" data-image-width="1024" data-image-height="1024">
        <a href="https://e.hypeds.com/newurl/${userID}" class="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-btn-1">Nova URL</a>
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

module.exports = router;