// File: home.js
// Description: 
//  Handles the home page route
// Author: Jamey Bryce
// Date Created: 10/06/2023

const router = require('express').Router();
const { getHome } = require('../controllers/homeController');

const home = router.get('/', getHome);

module.exports = home;