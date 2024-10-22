import { useState } from "react";

import Perfil from "./components/Perfil";
//import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return (
    <>
      <Perfil nome="jean" endereco="https://avatars.githubusercontent.com/u/154983968?v=4" />
      <ReposList />

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle fomr</button> */}
    </>
  )
}

export default App;