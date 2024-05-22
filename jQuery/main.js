$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            rua: {
                required: true
            },
            cidade: {
                required: false
            },
            estado: {
                required: false
            },
            cep: {
                required: true
            }
        },

        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },

        messages : {
            nome: 'Por-favor insira seu nome',
            telefone: 'Insira seu telefone corretamente',
            email: 'Por favor insira um email valido',
            cpf: 'Por favor insira seu cpf corretamente',
            rua: 'insira a rua e numero de sua residencia',
            cep: 'insira o cep de onde você mora'
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
    });
});