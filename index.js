//const app = require('./dbconnection/server');
const express = require('express');
const app = express();
//app.set('view engine', 'ejs');
//app.set('views', './src/views');
//app.use(express.static(path.join(__dirname, './src/views')));

//routes
app.get('/anuncie', (req, res) =>{
    res.render("advertise")
});

app.get('/veranuncio', (req,res) =>{
    res.render("see-advertises.html")
})

app.listen(3000, function(){
    console.log('Server ON');
});