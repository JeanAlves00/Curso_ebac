import { useState, useEffect } from 'react';

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('Componente renderizado');

        return () => {
            console.log('Componente finalizado');
        }
    }, []);

    useEffect(() => {
        console.log('o estado nome mudou');
    }, [ nome ]);

    useEffect(() => {
        console.log('o estado das notas mudou');
    }, [ materiaA, materiaB, materiaB]);

    const alteraNome = (e) => {
        setNome(e.target.value);
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return <p>Olá {nome}, você foi aprovado!</p>;
        } else {
            return <p>Olá {nome}, você foi reprovado!</p>;
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}> {item} </li>
                ))}
            </ul>

            <input 
                type="text" 
                placeholder="Nome do aluno" 
                onChange={e => alteraNome(e)}
            />
            <input 
                type="number" 
                placeholder="Nota matéria A" 
                onChange={evento => setMateriaA(parseInt(evento.target.value))} 
            />
            <input 
                type="number" 
                placeholder="Nota matéria B" 
                onChange={evento => setMateriaB(parseInt(evento.target.value))} 
            />
            <input 
                type="number" 
                placeholder="Nota matéria C" 
                onChange={evento => setMateriaC(parseInt(evento.target.value))} 
            />
            {renderizaResultado()}
        </form>
    );
}

export default Formulario;
