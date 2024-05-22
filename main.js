const form = document.getElementById('agenda-telefonica');
const tabelaContato = document.getElementById('lista-contato');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeTelefone = document.getElementById('nome');
    const inputNumeroTelefone = document.getElementById('numero');

    const novaLinha = tabelaContato.insertRow();
    const colunaNome = novaLinha.insertCell(0);
    const colunaTelefone = novaLinha.insertCell(1);

    colunaNome.textContent = inputNomeTelefone.value;
    colunaTelefone.textContent = inputNumeroTelefone.value;

    inputNomeTelefone.value = '';
    inputNumeroTelefone.value = '';
});
