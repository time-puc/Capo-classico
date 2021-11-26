// Icones da página

//const { default: axios } = require("axios");

var url = 'http://localhost:3001/anuncio/busca/16/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null';




window.onload = function() {
    feather.replace()


    //url = 'localhost:3001/anuncio/busca/1/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null';
    //carregarAnuncios(getRequisicao("http://localhost:3001/marca/1"));

    carregarPaginaInicial();


}

function carregarPaginaInicial()
{   

    montarUrl('minas_gerais',null,null,null,null,'Usado',);
    url = 'http://localhost:3001/anuncio/busca/16/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null';

    axios.get(url)
    .then(response => {

        //alert(response.data);
        carregarAnuncios(response.data);
    })
    .catch(error =>{
        alert(error);
    })
}

function montarUrl(estado=null,cidade=null,marca=null,modelo=null,versao=null,condicao=null,combustivel=null,porta=null,transmissao=null,cor=null,direcao=null,ano_min=null,ano_max=null,preco_min=null,preco_max=null,quilometragem_min=null,quilometragem_max=null)
{

    var capz = 'http://localhost:3001/anuncio/busca';

    var sufixo;

    for(let contador=0; contador < 17 ; contador++)
    {

        if(arguments[contador]==undefined)
        {
            sufixo = null
            capz += '/'+sufixo;
        }
        else{
        capz += '/'+arguments[contador];
        }
    }
    
    //console.log(estado,cidade,marca,modelo,versao,condicao,combustivel,porta,transmissao,cor,direcao,ano_min,ano_max,preco_min,preco_max,quilometragem_min,quilometragem_max);
    console.log(capz);

}




function carregarAnuncios(dados)
{
    var div = document.getElementById('painel_anuncios');

    var icone = document.getElementById('icone_modelo');

    var modelo = document.getElementById('modelo_anuncio');

    modelo.setAttribute("style", "display: none");


        for (let contador = 0; contador < Object.keys(dados).length; contador++) {

            var divNova = document.createElement("div");
            divNova.setAttribute('class','col news-col')

            var img = document.createElement("img");
            img.setAttribute('class',"news-img");
            img.setAttribute('src','../assets/cars/fusca.jpg');

            var h5 = document.createElement("h5");
            h5.setAttribute('class',"advertise-css");
            h5.innerHTML = dados[contador]['modelo'];

            var small = document.createElement("small");
            small.setAttribute('class',"form-text text-muted");
            small.innerHTML = dados[contador]['ano'];


            var p1 = document.createElement("p");
            p1.innerHTML = dados[contador]['versao'] + ' ' + dados[contador]['combustivel'] + ' ' + dados[contador]['motor'];

            var p2 = document.createElement("p");
            p2.innerHTML = dados[contador]['porta'] + 'P ' + dados[contador]['transmissao']

            divNova.appendChild(img);
            divNova.appendChild(h5);
            divNova.appendChild(small);
            divNova.appendChild(p1);
            divNova.appendChild(p2);


            var divNovinha = document.createElement("div");
            divNovinha.setAttribute('class', "space-btw")

            var span = document.createElement("span")
            span.innerHTML = "R$ 20.000"

            var a = icone.cloneNode(true);

            divNovinha.appendChild(span);
            divNovinha.appendChild(a);


            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-primary btn-edit");
            button.innerHTML = "Ver anúncio";

            var hr = document.createElement("hr")


            divNova.appendChild(divNovinha);
            divNova.appendChild(button)
            divNova.appendChild(hr);

            div.appendChild(divNova);

        }

}