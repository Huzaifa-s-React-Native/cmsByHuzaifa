const path = require('path');
const express = require('express');


const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/images', express.static(path.join(__dirname, 'images')));



app.get('/', (req, res) => {
    res.redirect('/login');
});
app.get('/login', (req, res) => {
    res.render('loginnew', { title: 'Login Page', message: 'Hello, World!'});
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});