import styles from './perfil.module.css';

//export default () => { -- Outras opcoes de exportação
//export default function() {

// eslint-disable-next-line react/prop-types
const Perfil = ({nomeUsuario}) => {

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.titulo}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil; //Caso use os outros dois esse codigo nao e nessesario assim como o const