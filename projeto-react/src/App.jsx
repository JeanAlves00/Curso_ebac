
function App() {
  const nome = "Jean"

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: "Jose",
    sobrenome: "Silva",
    idade: 30,
    endereco: {
      rua: "Rua dos Bobos",
      numero: 123,
      cidade: "Cidade do Silva",
      estado: "SP"
    }
  }
  
  let estaDeDia = false;

  return (
    <div >
      <h1>Olá, {pessoa.nome}!</h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom dia!' : 'Boa tarde!'}
    </div>
  );

}

export default App
