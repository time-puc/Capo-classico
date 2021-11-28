window.onload = function () {
    feather.replace();
    todasAsMarcas();
    condicao();
    cor();
    estado();
}

function todasAsMarcas() {
    let url = 'http://localhost:3000/marca/'

    axios.get(url)
        .then(response => {

            for (let i = 0; i < response.data.length; i++) {
                var option = document.createElement('option');
                option.value = response.data[i].id;
                option.text = response.data[i].nome;
                var select = document.getElementById('brand');
                select.appendChild(option);
            };

        })
        .catch(error => {
            alert(error.message)
        })
}

function selecionaModelo() {
    let idMarca = document.getElementById('brand').value;

    let url = 'http://localhost:3000/modelo/' + idMarca;

    axios.get(url)
        .then(response => {
            if(document.querySelector(".options_modelo") !== null){
                document.querySelector(".options_modelo").remove();
            }
            
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
}

function selecionaAno() {
    let idModelo = document.getElementById('model').value;
    let url = 'http://localhost:3000/versao/' + idModelo;

    axios.get(url)
    .then(response => {
        if(document.querySelector(".ano_option") !== null){
            document.querySelector(".ano_option").remove();
        }

        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.className = 'ano_option';
            option.value = response.data[i].ano;
            option.text = response.data[i].ano;
            var select = document.getElementById('year');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })
}

function selecionaVersao() {
    let anoM = document.getElementById('year').value;
    let idModelo = document.getElementById('model').value;
    
    let url = 'http://localhost:3000/versao/ano/modelo/' + idModelo + '/' + anoM;

    axios.get(url)
    .then(response => {
        if(document.querySelector(".versao_option") !== null){
            document.querySelector(".versao_option").remove();
        }

        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.className = 'versao_option';
            option.value = response.data[i].id;
            option.text = response.data[i].nome;
            var select = document.getElementById('version');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })
}

function condicao() {
    let url = 'http://localhost:3000/condicao';

    axios.get(url)
    .then(response => {
        if(document.querySelector(".condicao") !== null){
            document.querySelector(".condicao").remove();
        }

        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.className = 'condicao';
            option.value = response.data[i].id;
            option.text = response.data[i].nome;
            var select = document.getElementById('condition');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })
}

function cor() {
    let url = 'http://localhost:3000/cor';

    axios.get(url)
    .then(response => {
        if(document.querySelector(".cor") !== null){
            document.querySelector(".cor").remove();
        }

        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.className = 'cor';
            option.value = response.data[i].id;
            option.text = response.data[i].nome;
            var select = document.getElementById('color');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })
}

function caracteristicasCampos() {
    let idVersao = document.getElementById('version').value;
    let url = 'http://localhost:3000/versao/caracteristicas/' + idVersao;

    let campoTransmissao = document.getElementById('transmission');
    let campoPortas = document.getElementById('doors');
    let campoCombustivel = document.getElementById('fuel');
    let campoDirecao = document.getElementById('steering');


    axios.get(url)
    .then(response => {
        if(document.querySelector(".caracteristicas") !== null){
            document.querySelector(".caracteristicas").remove();
        }

        let dados = response.data[0];

        campoTransmissao.className = 'caracteristicas';
        campoTransmissao.value = `${dados.transmissao}`;

        campoPortas.className = 'caracteristicas';
        campoPortas.value = `${dados.porta}`;

        campoCombustivel.className = 'caracteristicas';
        campoCombustivel.value = `${dados.combustivel}`
        
        campoDirecao.className = 'caracteristicas';
        campoDirecao.value = `${dados.direcao}`;
    })
    .catch(error => {
        alert(error.message)
    })
}

function estado(){

    let url = 'http://localhost:3000/estado';

    axios.get(url)
    .then(response => {

        if(document.querySelector(".estado") !== null){
            document.querySelector(".estado").remove();
        }

        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.className = 'estado';
            option.value = response.data[i].id;
            option.text = response.data[i].uf;
            var select = document.getElementById('state');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })
}

function cidade(){
    let estado = document.getElementById('state').value;
    let url = 'http://localhost:3000/cidade/' + estado;

    axios.get(url)
    .then(response => {
        if(document.querySelector(".cidade") !== null){
            document.querySelector(".cidade").remove();
        }

        for (let i = 0; i < (response.data).length; i++) {
            var option = document.createElement('option');
            option.className = 'cidade';
            option.value = response.data[i].id;
            option.text = response.data[i].nome;
            var select = document.getElementById('city');
            select.appendChild(option);
        };
    })
    .catch(error => {
        alert(error.message)
    })
}

function novoAnuncio() {
    let preco = document.getElementById('price').value;
    let descricao = document.getElementById('info').value;
    let quilometragem = document.getElementById('km').value;
    let corId = document.getElementById('color').value;
    let condicaoId = document.getElementById('condition').value;
    let cidadeId = document.getElementById('city').value;
    let versaoId = document.getElementById('version').value;
    let usuarioId = '2';
    
    let url = 'http://localhost:3000/anuncio/inclusao/';
    
    axios.post(url, { preco: preco, descricao:descricao, quilometragem:quilometragem, cor_id:corId, condicao_id:condicaoId, cidade_id:cidadeId, versao_id:versaoId, usuario_id:usuarioId })
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error.response.data);
    })
}

