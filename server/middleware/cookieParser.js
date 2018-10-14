var express = require('express');

const parseCookies = (req, res, next) => { 
  let cookie = req.headers.cookie;
  let cookiesParsed = {};
  if (cookie) {
    let cookieArr = cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let secondCookieArr = cookieArr[i].split('=');
      cookiesParsed[secondCookieArr[0].trim()] = secondCookieArr[1].trim();
    }
  }
  req.cookies = cookiesParsed;
  next();
};

module.exports = parseCookies;