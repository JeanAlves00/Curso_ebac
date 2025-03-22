import { useState } from 'react';

function App() {
  const [tarefa, setTarefa] = useState('')
  const [tarefaTemp, setTarefaTemp] = useState([])

  function cadastrarTarefa() {
    setTarefa([...tarefaTemp, tarefa])
    setTarefaTemp('')
  }

  return (
    <div>
      <input type="text" value={tarefaTemp} onChange={evento => setTarefaTemp(evento.target.value)}/>
      <button onClick={cadastrarTarefa}>Adicionar</button>
      <ul>
        {tarefa.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
