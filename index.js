const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();

// Logging middleware
app.use(morgan('tiny'));

// Handlebars middleware
app.engine('handlebars', exphbs({
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        message: 'Welcome to my website!'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        message: 'Learn more about me and my work.'
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.green.bold);
});
