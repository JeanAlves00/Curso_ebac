import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCaregando, setEstaCaregando] = useState([true]);

    useEffect(() => {
        fetch(`https://api.github.com/users/jeanalves00/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCaregando(false);
                setRepos(resJson);
            }, 3000);
        })
    }, []);


    return (
        <>
            {estaCaregando &&
                <img src="../public/loading-7528_128.gif" alt="loading" />
            }

            <ul>
                {/* {repos.map(repositorio => ( */}
                {repos.map (({ id, name, language, html_url }) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem:</b> {language} <br />
                        <a target="_blank" href={html_url}>Visitar no Github</a> <br />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ReposList; 