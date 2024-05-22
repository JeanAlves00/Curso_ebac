document.getElementById('submitBtn1').addEventListener('click', function() {
    validarFormulario1();
});

function validarFormulario1() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        alert('Formulário 1 válido! B é maior que A.');
    } else {
        alert('Formulário 1 inválido! B deve ser maior que A.');
    }
}
