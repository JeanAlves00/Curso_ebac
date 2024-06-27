/*
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn-buscar-cep").addEventListener("click", function(){
        //AJAX - Asynchronous JavaScript and XML
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById("cep").value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

        xhttp.open("GET", endpoint);
        xhttp.send();
    })
})
*/

$(document).ready(function() {
    $('#btn-buscar-cep').click(function(){
        const cep = $("#cep").val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

        $.ajax({
            url: endpoint,
            method: 'GET',
            success: function(resposta) {
                console.log(resposta);
            },
            error: function(err) {
                console.error('Erro ao buscar CEP:', err);
            }
        });
    });
});