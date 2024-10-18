import  './Perfil.css'

//export default () => { -- Outras opcoes de exportação
//export default function() {

const Perfil = () => {
    const usuario ={
        nome: 'usuario',
        avatarUrl: 'https://placehold.co/600x400/EEE/31343C'
    }

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatarUrl}/>
            <h3 className="perfil-titulos">{usuario.nome}</h3>
        </div>
    )
}

export default Perfil; //Caso use os outros dois esse codigo nao e nessesario assim como o const