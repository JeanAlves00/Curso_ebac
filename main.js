const form = document.getElementById('form-registro');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValidao = false;
    e.preventDefault();

    const nome = document.getElementById('nome');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const datanascimento = document.getElementById('data-nascimento');
    const mensagemSuceso = `registro efetuado com sucesso: <b>${nome.value}</b>`;


    formEValidao = validaNome(nome.value)
    if (formEValidao) {
        const containerMesagemSucesso = document.querySelector('.success-message');
        containerMesagemSucesso.innerHTML = mensagemSuceso;
        containerMesagemSucesso.style.display = 'block';

        nome.value = '';
        password.value = '';
        email.value = '';
        telefone.value = '';
        datanascimento.value = '';

    } else {
        nome.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

console.log(form);