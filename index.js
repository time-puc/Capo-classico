const app = require('./dbconnection/server');

//routes
var announceRoute = require('./src/routes/advertise')(app);


app.listen(3000, function(){
    console.log('Server ON');
});