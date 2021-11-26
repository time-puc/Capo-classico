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
           // document.querySelector(".options_modelo").remove;
            for (let i = 0; i < (response.data).length; i++) {
                var option = document.createElement('option');
                option.className = 'options_modelo';
                option.value = response.data[i].id;
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

function selecionaAno() {
    
    let idModelo = document.getElementById('model').value;
    let url = 'http://localhost:3000/versao/' + idModelo;

    axios.get(url)
    .then(response => {
        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.value = response.data[i].ano;
            option.text = response.data[i].ano;
            var select = document.getElementById('year');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })

    event.preventDefault();
}

function selecionaVersao() {

    let ano = document.getElementById('year').value;
    let idModelo = document.getElementById('model').value;
    let url = 'http://localhost:3000/versao/'+ idModelo + '/' + ano;

    axios.get(url)
    .then(response => {
        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.value = response.data[i].id;
            option.text = response.data[i].nome;
            var select = document.getElementById('version');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })

    event.preventDefault();
}

function novoAnuncio() {
    let preco = document.getElementById('price').value;
    let descricao = document.getElementById('info').value;
    let quilometragem = document.getElementById('km').value;
    let corId = document.getElementById('color').value;
    let condicaoId = document.getElementById('condition').value;
    let cidadeId = document.getElementById('city').value;
    let versaoId = document.getElementById('version').value;
    let usuarioId = document.getElementById('').value;
    
    /*
    let marcaVeiculo = document.getElementById('brand').value;
    let modeloVeiculo = document.getElementById('model').value;
    let anoVeiculo = document.getElementById('year').value;
    let transmissao = document.getElementById('transmission').value;
    let portas  = document.getElementById('brand').value;
    let combustivel = document.getElementById('fuel').value;
    let direcao = document.getElementById('steering').value;
    let estadoId = document.getElementById('').value; //COMPLETAR
    let imagens= document.getElementById('images').value;*/

    let url = 'http://localhost:3000/anuncio/inclusao/'  + preco  + '/' + descricao  + '/' + quilometragem  + '/' + corId  + '/' + condicaoId  + '/' + cidadeId  + '/' + versaoId  + '/' + usuarioId
    axios.get(url)
    .then(response => {
        alert('Publicação efetuada com sucesso!');
    })
    .catch(error => {
        alert(error.message)
    })

    event.preventDefault();
    
}

function testeimg() {

    let img = document.getElementById('images').value;

    var myBlob = new Blob(["This is my blob content"], { type: "text/plain" });
    console.log(myBlob);

    var fd = new FormData();
    fd.append('upl', myBlob, 'blobby.txt');
    
}

