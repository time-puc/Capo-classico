//const { default: axios } = require("axios");

//const { default: axios } = require("axios");

// Icones da página
window.onload = function () {
    feather.replace();
    todasAsMarcas();
}

function todasAsMarcas() {

    let url = 'http://localhost:3000/marca/'

    axios.get(url)
        .then(response => {

            for (let i = 0; i < response.data.length; i++) {
                var option = document.createElement('option');
                option.value = response.data[i].id;;
                option.text = response.data[i].nome;
                var select = document.getElementById('brand');
                select.appendChild(option);
            };

        })
        .catch(error => {
            alert(error.message)
        })

    event.preventDefault();
}

function selecionaModelo() {

    let idMarca = document.getElementById('brand').value;
    let url = 'http://localhost:3000/modelo/' + idMarca

    axios.get(url)
        .then(response => {
            for (let i = 0; i < (response.data).length; i++) {
                var option = document.createElement('option');
                option.value = response.data[i].id;;
                option.text = response.data[i].nome;
                var select = document.getElementById('model');
                select.appendChild(option);
            };
        })
        .catch(error => {
            alert(error.message)
        })

    event.preventDefault();
}

/*function selecionaAno() {
    
}*/


