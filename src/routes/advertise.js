var dbConnection = require('../../dbconnection/dbConnection');

module.exports = function(app){
    app.get('/anuncie', function(req, res){
        try {
            var connection = dbConnection();
            connection.query('select * from marca', function(error, result){
                res.send(result);
            })
        } catch (error) {
            console.error(error);
        }
    });
};
