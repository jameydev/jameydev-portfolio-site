const getHome = (req, res) => {
    res.render('home', {
        title: 'JameyDev - FullStack Developer - Home Page',
        time: new Date().toLocaleString()
    });
}

module.exports = {
    getHome
};