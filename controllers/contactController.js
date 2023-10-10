// File: contactController.js
// Description: 
//  Renders the contact form
// Author: Jamey Bryce
// Date Created: 10/09/2023
const nodemailer = require('nodemailer');

const getContactForm = (req, res) => {
    res.render('contact', {
        title: 'Contact Form | JameyDev - FullStack Developer',
        time: new Date().toLocaleString()
    });
}

// Supporting functions for 
// sending the contact form
const createTransporter = () => {
    return nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
}

const getEmailOptions = (name, email) => {
    return {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New Message from Your Website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
}

// TO-DO: Make error and success pages
const mailHandler = (error, info) => {
    if (error) {
        console.log(error);
        res.send('Error');
    } 
    else {
        console.log(`Email sent: ${info.response}`);
        res.send('Success');
    }
}

// TO-DO: Make this work
const sendForm = (req, res) => {
    // Get the form data
    // TO-DO: Validation
    const { name, email, message } = req.body;

    // Create a transporter object
    const transporter = createTransporter();

    // Set up the email options
    const mailOptions = getEmailOptions(name, email);

    // Send the email
    transporter.sendMail(mailOptions, mailHandler);
}

module.exports = {
    getContactForm,
    sendForm
};