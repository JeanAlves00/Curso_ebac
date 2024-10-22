import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import styles from './App.module.css'; // Altere o caminho conforme necessário

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        onBlur={(e) => setNomeUsuario(e.target.value)} 
        className={styles.input} 
        placeholder="Digite seu nome de usuário..."
      />

      {nomeUsuario.length > 4 && (
        <>
          <div className={styles.perfil}>
            <Perfil nomeUsuario={nomeUsuario} />
          </div>
          <div className={styles.reposList}>
            <ReposList nomeUsuario={nomeUsuario} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
