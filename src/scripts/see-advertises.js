
function sendMessage() {
    var phone = '5511996533334'
    var message = document.querySelector('#mensagem-form').value

    alert('Você será encaminhado ao whatsapp do anunciante')
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`);
}

// Icones da página
window.onload = function() {
    feather.replace()
}
