var dbConnection = require('../../dbconnection/dbConnection');
var connection = dbConnection();

function allBrands() {
    connection.query('select * from marca', function(errors, result){
        var brands = JSON.parse(JSON.stringify(result));
        for(let i=0; i<=brands.length; i++){
            var option = document.createElement("option");
            option.value = brands[i];
            option.text = brands.charAt(0).toUpperCase();
            var select = document.getElementsById('brand');
            select.appendChild(option);
        };
    });
    //loadBrands(brands);
};


// Icones da página
window.onload = function() {
    console.log('carregado');
    feather.replace();
    allBrands();
}