const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);


    return (
        <form>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(evento.target.value)}/>
            <input type="number" placeholder="Nota matéria B" />
            <input type="number" placeholder="Nota matéria C" />
            <p>O aluno foi aprovado</p>
        </form>
    )
}

export default Formulario;