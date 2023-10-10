// File: contact.js
// Description: 
//  Handles the contact form route
// Author: Jamey Bryce
// Date Created: 10/09/2023

const router = require('express').Router();
const { 
    getContactForm,
    sendForm 
} = require('../controllers/contactController');

const contact = router.get('/contact', getContactForm).post('/', sendForm);

module.exports = contact;