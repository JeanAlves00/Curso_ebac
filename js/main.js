$(document).ready(function() {
    $('.carrosel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                telefone: true
            },
            mensagem:{
                required: false
            },
            jogoInteresse: {
                required: true
            }

        },
        messages : {
            nome: 'Por-favor insira seu nome',
            email: 'Por favor insira um email valido',
            telefone: 'Insira seu telefone corretamente',
            jogoInteresse: 'Infome seu jogo de interesse'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        alert($(this).parent().find('h3').text());

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});