// File: form.js
// Description: 
//  Handles the contact form submission
// Author: Jamey Bryce
// Date Created: 10/13/2023

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission behavior

    const formData = new FormData(form); // create a new FormData object from the form data

    fetch('/contact', {
        method: 'POST', // set the request method
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // set the request header
        },
        body: new URLSearchParams(formData) // set the request body
    })
    .then(response => {
        if (response.ok) {
            const successMessage = document.createElement('p'); // create a new element to contain the success message
            successMessage.textContent = 'Your message was sent successfully!'; // set the text content of the success message
            form.appendChild(successMessage); // append the success message to the form
            return response.text(); // return the response text if the request was successful
        } 
        else {
            const errorMessage = document.createElement('p'); // create a new element to contain the error message
            errorMessage.textContent = 'There was an error submitting your form. Please try again later.'; // set the text content of the error message
            form.appendChild(errorMessage); // append the error message to the form
            throw new Error('Network response was not ok.'); // throw an error if the request was not successful
        }
    })
    .then(data => {
        console.log(data); // log the response from the server
    })
    .catch(error => {
        console.error(error); // log any errors that occurred
    });
});