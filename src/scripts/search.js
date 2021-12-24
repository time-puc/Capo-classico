// Icones da página


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///MUITO IMPORTNTE : LEMBRAR DE TROCAR O LOCALHOST 3001 PARA 3000 NO FINAL!!!
//TANTO AKI QUANTO NO contador.JS DO BACK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//var url = 'http://localhost:3001/anuncio/busca/16/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null';
var url = 'http://localhost:3000/anuncio/busca/16';
var col_estado = [];
var col_cidade = [];
var col_marca = [];
var col_modelo = [];
var col_versao = [];
var col_condicao = [];
var col_combustivel = [];
var col_porta = [];
var col_transmissao = [];
var col_cor = [];
var col_direcao =[];


var end_estado = null;
var end_cidade = null;
var end_marca = null;
var end_modelo = null;
var end_versao = null;
var end_condicao = null;
var end_combustivel = null;
var end_porta = null;
var end_transmissao = null;
var end_cor = null;
var end_direcao = null;
var end_ano_min = null;
var end_ano_max = null;
var end_preco_min = null;
var end_preco_max = null;
var end_quilometragem_min = null;
var end_quilometragem_max = null;

/*const options = {
    "nome" : "renato_teste"
};*/

window.onload = function() {
    feather.replace()


    //url = 'localhost:3001/anuncio/busca/1/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null/null';
    //carregarAnuncios(getRequisicao("http://localhost:3001/marca/1"));

    /*json=montarJson(1,1);
    json= JSON.stringify(json);
    carregarElementosFiltro(json);*/

    //testarMetodo();

    carregarElementosFiltro(montarJson());
    //carregarElementosFiltro(options);

}
function filtrar(tipo,valor)
{
    limparResultados();
    json = montarJson(tipo,valor);
    carregarElementosFiltro(json);
    //atualizarPagina();
}

function carregarElementosFiltro(json)
{
    console.log('json passado',json);

    axios.put("http://localhost:3000/anuncio/busca/16",JSON.stringify(json),
        {
            headers: {
                "Accept": "*/*",
                "Content-Type" : "application/json"
              },
        }
    ).then(response => {
            carregarFiltros(response.data);
            carregarAnuncios(response.data);
        })
        .catch(error => {
            alert('FALHA NA BUSCA:\n\nCÓDIGO: '+ error.response.data.codigo + '\nMENSAGEM: '+error.response.data.mensagem+ '\nDESCRIÇÃO: '+error.response.data.descricao);
        })
}

function carregarFiltros(dados)
{
    carregarEstados(dados);
    carregarCidades(dados);
    carregarMarcas(dados);
    carregarModelos(dados);
    carregarVersoes(dados);
    carregarCondicoes(dados);
    carregarCombustiveis(dados);
    carregarPortas(dados);
    carregarTransmissoes(dados);
    carregarCores(dados);
    carregarDirecoes(dados);
}

function carregarAnuncios(dados)
{
    var div = document.getElementById('painel_anuncios');

    var divDinamica = document.createElement("div");
    divDinamica.id = 'resultado_do_filtro';
    divDinamica.setAttribute("class","row mt-4");

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

            var small = document.createElement("h6");
            small.setAttribute('class',"form-text text-muted");
            small.innerHTML = "Ano: " + dados[contador]['ano'];


            var p1 = document.createElement("p");
            p1.innerHTML = "Versão: " + dados[contador]['versao'];

            var p2 = document.createElement("p");
            p2.innerHTML = "Motor: " + dados[contador]['motor'];

            var p3 = document.createElement("p");
            p3.innerHTML = "Transmissão: " + dados[contador]['transmissao'];

            divNova.appendChild(img);
            divNova.appendChild(h5);
            divNova.appendChild(small);
            divNova.appendChild(p1);
            divNova.appendChild(p2);
            divNova.appendChild(p3);


            var divNovinha = document.createElement("div");
            divNovinha.setAttribute('class', "space-btw");

            var span = document.createElement("span");
            span.innerHTML = 'R$' + dados[contador]['preco'];

            var a = icone.cloneNode(true);

            divNovinha.appendChild(span);
            divNovinha.appendChild(a);


            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-primary btn-edit");
            button.innerHTML = "Ver anúncio";

            var hr = document.createElement("hr");


            divNova.appendChild(divNovinha);
            divNova.appendChild(button);
            divNova.appendChild(hr);

            divDinamica.appendChild(divNova);
        }

        div.appendChild(divDinamica);
}

function atualizarPagina()
{
    
}

function limparFiltros()
{
    var estado = document.getElementById('search-location-estado');
    while (estado.options.length > 1) {                
        estado.remove(1);
    }

    var opcao_padrao = document.createElement("option");
    opcao_padrao.setAttribute("disabled");
    opcao_padrao.setAttribute("selected");
    opcao_padrao.innerHTML="Estado";
    estado.appendChild(opcao_padrao);
}

function limparResultados()
{
    var node = document.getElementById('resultado_do_filtro');
    if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
}

function montarJson(tipo,valor)
{
    valor = parseInt(valor);
    switch(tipo)
    {
        case 'estado': 
            end_estado= valor;
            break;
        case 'marca': 
            end_marca= valor;
            break;
        case 'modelo': 
            end_modelo= valor;
            break;
        case 'versao': 
            end_versao= valor;
            break;
        case 'condicao': 
            end_condicao= valor;
            break;
        case 'combustivel': 
            end_combustivel= valor;
            break;
        case 'porta': 
            end_porta= valor;
            break;
        case 'transmissao': 
            end_transmissao= valor;
            break;
        case 'cor': 
            end_cor= valor;
            break;
        case 'direcao': 
            end_direcao= valor;
            break;
        case 'ano_min': 
            end_ano_min= valor;
            break;
        case 'ano_max': 
            end_ano_max= valor;
            break;
        case 'preco_min': 
            end_preco_min= valor;
            break;
        case 'preco_max': 
            end_preco_max= valor;
            break;
        case 'quilometragem_min': 
            end_quilometragem_min= valor;
            break; 
        case 'quilometragem_max': 
            end_quilometragem_max= valor;
            break; 
    }

    var json = {
        "estado_id" : end_estado,
        "marca_id" : end_marca,
        "modelo_id" : end_modelo,
        "versao_id" : end_versao,
        "condicao_id" : end_condicao,
        "combustivel_id" : end_combustivel,
        "porta_id" : end_porta,
        "transmissao_id" : end_transmissao,
        "cor_id" : end_cor,
        "direcao_id" : end_direcao,
        "ano_min" : end_ano_min,
        "ano_max" : end_ano_max,
        "preco_min" : end_preco_min,
        "preco_max" : end_preco_max,
        "quilometragem_min" : end_quilometragem_min,
        "quilometragem_max" : end_quilometragem_max
    }

    return json;
    

    /*if(tipo=='estado')
    end_estado=valor;
    else if(tipo=='cidade')
    end_cidade=valor;
    else if(tipo=='marca')
    end_marca=valor;
    else if(tipo=='modelo')
    end_modelo=valor;
    else if(tipo=='versao') 
    end_versao=valor;
    else if(tipo=='condicao')
    end_condicao=valor;
    else if(tipo=='combustivel')
    end_combustivel=valor;
    else if(tipo=='porta')
    end_porta=valor;
    else if(tipo=='transmissao')
    end_transmissao=valor;
    else if(tipo=='cor')
    end_cor=valor;
    else if (tipo=='direcao')
    end_direcao=valor;
    else if (tipo=='ano_min')
    end_ano_min=valor;
    else if (tipo=='ano_max')
    end_ano_max=valor;
    else if (tipo=='preco_min')
    end_preco_min=valor;
    else if (tipo=='preco_max')
    end_preco_max=valor;
    else if (tipo=='quilometragem_min')
    end_quilometragem_min=valor;
    else if (tipo=='quilometragem_max')
    end_quilometragem_max=valor;


   return 'http://localhost:3001/anuncio/busca/16/'
   +end_estado+'/'
   +end_cidade+'/'
   +end_marca+'/'
   +end_modelo+'/'
   +end_versao+'/'
   +end_condicao+'/'
   +end_combustivel+'/'
   +end_porta+'/'
   +end_transmissao+'/'
   +end_cor+'/'
   +end_direcao+'/'
   +end_ano_min+'/'
   +end_ano_max+'/'
   +end_preco_min+'/'
   +end_preco_max+'/'
   +end_quilometragem_min+'/'
   +end_quilometragem_max*/

}

function testarMetodo()
{
    axios.put("http://localhost:3000/anuncio/busca/16",
        {
            headers: {
                "Accept": "*/*",
                "Content-Type" : "application/json"
              },
              params: JSON.stringify(options)
        }
    ).then(response=>{
        console.log(response);
    })
}

function carregarEstados(dados)
{
    var estado = document.getElementById('search-location-estado');

    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_estado.find(element => element == dados[contador]['id_estado']) == undefined)
        {
        var opcao = document.createElement("option");
        opcao.innerHTML = dados[contador]['estado'];
        opcao.setAttribute("value",dados[contador]['id_estado']);

        alert(estado.options.length);
        /*while (estado.options.length > 0) {                
        estado.remove(1);
        }*/

        
        estado.appendChild(opcao);
        col_estado.push(dados[contador]['id_estado']);
        }
    }


    //estado.setAttribute("onchange","mostrarUrl('estado',"+estado.value+")");

}

function carregarCidades(dados)
{
    var cidade = document.getElementById('search-location-cidade');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_cidade.find(element => element == dados[contador]['id_cidade']) == undefined)
        {
        var opcao = document.createElement("option");
        opcao.innerHTML = dados[contador]['cidade'];
        opcao.setAttribute("value",dados[contador]['id_cidade']);
        cidade.appendChild(opcao);
        col_cidade.push(dados[contador]['id_cidade']);
        }
    }
}


function carregarMarcas(dados)
{
    var marca = document.getElementById('search-brand');
    
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_marca.find(element => element == dados[contador]['id_marca']) == undefined)
        {
        var opcao = document.createElement("option");
        opcao.innerHTML = dados[contador]['marca'];
        opcao.setAttribute("value",dados[contador]['id_marca']);
        marca.appendChild(opcao);
        col_marca.push(dados[contador]['id_marca']);
        }
    }
}

function carregarModelos(dados)
{
    var modelo = document.getElementById('form-check-modelo');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_modelo.find(element => element == dados[contador]['id_modelo']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_modelo']);
        input.setAttribute("onchange","filtrar('modelo',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['modelo'];

        var br = document.createElement("br");

        modelo.appendChild(input);
        modelo.appendChild(label);
        modelo.appendChild(br);

        col_modelo.push(dados[contador]['id_modelo']);
        }
    }
}

function carregarVersoes(dados)
{
    var versao = document.getElementById('form-check-versao');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_versao.find(element => element == dados[contador]['id_versao']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_versao']);
        input.setAttribute("onchange","filtrar('versao',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['versao'];

        var br = document.createElement("br");

        versao.appendChild(input);
        versao.appendChild(label);
        versao.appendChild(br);

        col_versao.push(dados[contador]['id_versao']);
        }
    }
}

function carregarCondicoes(dados)
{
    var condicao = document.getElementById('form-check-condicao');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_condicao.find(element => element == dados[contador]['id_condicao']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_condicao']);
        input.setAttribute("onchange","filtrar('condicao',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['condicao'];

        var br = document.createElement("br");

        condicao.appendChild(input);
        condicao.appendChild(label);
        condicao.appendChild(br);

        col_condicao.push(dados[contador]['id_condicao']);
        }
    }
}

function carregarCombustiveis(dados)
{
    var combustivel = document.getElementById('form-check-combustivel');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_combustivel.find(element => element == dados[contador]['id_combustivel']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_combustivel']);
        input.setAttribute("onchange","filtrar('combustivel',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['combustivel'];

        var br = document.createElement("br");

        combustivel.appendChild(input);
        combustivel.appendChild(label);
        combustivel.appendChild(br);

        col_combustivel.push(dados[contador]['id_combustivel']);
        }
    }
}

function carregarPortas(dados)
{
    var porta = document.getElementById('form-check-porta');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_porta.find(element => element == dados[contador]['id_porta']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_porta']);
        input.setAttribute("onchange","filtrar('porta',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['porta'];

        var br = document.createElement("br");

        porta.appendChild(input);
        porta.appendChild(label);
        porta.appendChild(br);

        col_porta.push(dados[contador]['id_porta']);
        }
    }
}


function carregarTransmissoes(dados)
{
    var transmissao = document.getElementById('form-check-transmissao');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_transmissao.find(element => element == dados[contador]['id_transmissao']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_transmissao']);
        input.setAttribute("onchange","filtrar('transmissao',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['transmissao'];

        var br = document.createElement("br");

        transmissao.appendChild(input);
        transmissao.appendChild(label);
        transmissao.appendChild(br);

        col_transmissao.push(dados[contador]['id_transmissao']);
        }
    }
}

function carregarCores(dados)
{
    var cor = document.getElementById('form-check-cor');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_cor.find(element => element == dados[contador]['id_cor']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_cor']);
        input.setAttribute("onchange","filtrar('cor',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['cor'];

        var br = document.createElement("br");

        cor.appendChild(input);
        cor.appendChild(label);
        cor.appendChild(br);

        col_cor.push(dados[contador]['id_cor']);
        }
    }
}

function carregarDirecoes(dados)
{
    var direcao = document.getElementById('form-check-direcao');
    for (let contador = 0; contador < Object.keys(dados).length; contador++) {

        if(col_direcao.find(element => element == dados[contador]['id_direcao']) == undefined)
        {
        var input = document.createElement("input");
        input.setAttribute("class","form-check-input");
        input.setAttribute("type","checkbox");
        input.setAttribute("value",dados[contador]['id_direcao']);
        input.setAttribute("onchange","filtrar('direcao',this.value)");

        var label = document.createElement("label");
        label.setAttribute("class","form-check-label");
        label.setAttribute("for","model-search");
        label.innerHTML = dados[contador]['direcao'];

        var br = document.createElement("br");

        direcao.appendChild(input);
        direcao.appendChild(label);
        direcao.appendChild(br);

        col_direcao.push(dados[contador]['id_direcao']);
        }
    }
}