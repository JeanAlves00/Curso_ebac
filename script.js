$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function (){
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#indereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a hrfer="${enderecoDaNovaImagem}" target="_blank" title="Ver Imagem em tamanho real">
                    Ver imagem em tamanho real
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#indereço-imagem-nova').val('')
    })
})