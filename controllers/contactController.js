// File: contactController.js
// Description: 
//  Renders the contact form
// Author: Jamey Bryce
// Date Created: 10/09/2023

const getContactForm = (req, res) => {
    res.render('contact', {
        title: 'Contact Form | JameyDev - FullStack Developer',
        time: new Date().toLocaleString()
    });
}

module.exports = {
    getContactForm
};