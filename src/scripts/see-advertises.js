var resp
var modelo
var versao

function sendMessage() {
    window.open(`mailto:${resp.email}?subject=Tenho interesse no veículo ${resp.modelo} ${resp.versao}&body=${document.querySelector('#mensagem-form').value}`);
}

function loadAdvertise(id) {
    let url = `http://localhost:3000/anuncio/` + id

    axios.get(url)
    .then(response => {
        dados = response.data[0]
        resp = dados
        document.getElementById('title-advertise').innerHTML = `${dados.modelo}`
        document.getElementById('engine-advertise').innerHTML = `${dados.motor}`
        document.getElementById('version-advertise').innerHTML = `${dados.versao}`
        document.getElementById('year-advertise').innerHTML = `${dados.ano}`
        document.getElementById('mileage-advertise').innerHTML = `${dados.quilometragem} Km`
        document.getElementById('colour-advertise').innerHTML = `${dados.cor}`
        document.getElementById('fuel-advertise').innerHTML = `${dados.combustivel}`
        document.getElementById('condition-advertise').innerHTML = `${dados.condicao}`
        document.getElementById('door-advertise').innerHTML = `${dados.porta}`
        document.getElementById('gearbox-advertise').innerHTML = `${dados.transmissao}`
        document.getElementById('description-advertise').innerHTML = `${dados.descricao}`
        document.getElementById('price-advertise').innerHTML = `R$ ${dados.preco}`
    })
    .catch(error => {
        alert(error.message)
    })

    event.preventDefault();
}

// Icones da página
window.onload = function() {
    feather.replace()
    
    loadAdvertise(1)
}
