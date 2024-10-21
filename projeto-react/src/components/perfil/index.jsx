import  './perfil.css'

//export default () => { -- Outras opcoes de exportação
//export default function() {

// eslint-disable-next-line react/prop-types
const Perfil = ({endereco, nome}) => {

    return (
        <div>
            <img className="perfil-avatar" src={endereco}/>
            <h3 className="perfil-titulos">{nome}</h3>
        </div>
    )
}

export default Perfil; //Caso use os outros dois esse codigo nao e nessesario assim como o const