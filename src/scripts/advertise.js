const { default: axios } = require("axios");

// Icones da página
window.onload = function() {
    console.log('carregado');
    feather.replace();
    allBrands();
}

function allBrands() {

    try {
    axios.get('http://localhost:3000/marca')
    .then(response => {
        for(let i=0; i<=response.data.length; i++){
            var option = document.createElement("option");
            option.value = response.data[i];
            option.text = response.data.charAt(0).toUpperCase();
            var select = document.getElementsById('brand');
            select.appendChild(option);
        };
    })
    .catch (error => {
        alert.apply(error.message);

    }

};
