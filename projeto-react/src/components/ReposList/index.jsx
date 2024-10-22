import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styles from './reposlist.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [readmeContent, setReadmeContent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [readmeNotFound, setReadmeNotFound] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            setEstaCarregando(true);
            try {
                const res = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`);
                if (!res.ok) {
                    throw new Error('Erro ao carregar repositórios');
                }
                const resJson = await res.json();
                setRepos(resJson);
            } catch (error) {
                console.error(error);
            } finally {
                setEstaCarregando(false);
            }
        };

        fetchRepos();
    }, [nomeUsuario]);

    const fetchReadme = async (repoName) => {
        try {
            const res = await fetch(`https://api.github.com/repos/${nomeUsuario}/${repoName}/readme`, {
                headers: {
                    Accept: 'application/vnd.github.v3.raw'
                }
            });
            if (!res.ok) {
                throw new Error('README não encontrado');
            }
            const data = await res.text();
            setReadmeContent(data);
            setReadmeNotFound(false);
            setShowModal(true);
        } catch (err) {
            console.error(err);
            setReadmeNotFound(true);
            setShowModal(true);
        }
    };

    return (
        <>
            {estaCarregando && (
                <div className={styles.loadingContainer}>
                    <img src="/loading-7528_128.gif" alt="loading" className={styles.loadingImage} />
                </div>
            )}

            {!estaCarregando && repos.length > 0 && (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name} 
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language || "Não especificada"} 
                            </div>
                            <a className={styles.itemLink} target="_blank" rel="noopener noreferrer" href={html_url}>
                                Visitar no Github
                            </a>
                            <button className={styles.moreButton} onClick={() => fetchReadme(name)}>
                                Saber mais
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>README.md</h2>
                        {readmeNotFound ? (
                            <p>Arquivo README.md não encontrado</p>
                        ) : (
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                {readmeContent}
                            </ReactMarkdown>
                        )}
                        <button className={styles.closeButton} onClick={() => setShowModal(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ReposList;
