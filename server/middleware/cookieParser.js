var express = require('express');

const parseCookies = (req, res, next) => { 
  let cookie = req.headers.cookie;
  let cookieSplit = {};
  if (cookie) {
    let cookieArr = cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let secondCookieArr = cookieArr[i].split('=');
      cookieSplit[secondCookieArr[0].trim()] = secondCookieArr[1].trim();
    }
  }
  req.cookies = cookieSplit;
  next();
};

module.exports = parseCookies;