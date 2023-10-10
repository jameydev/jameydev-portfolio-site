// File: homeController.js
// Description: 
//  Renders the home page
// Author: Jamey Bryce
// Date Created: 10/06/2023
const getHome = (req, res) => {
    res.render('home', {
        title: 'JameyDev - FullStack Developer - Home Page',
        time: new Date().toLocaleString()
    });
}

module.exports = {
    getHome
};