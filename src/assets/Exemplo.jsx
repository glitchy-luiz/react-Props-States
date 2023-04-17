    import {useState} from "react"

const Exemplo = ({cor}) =>{

    const [texto, setTexto] = useState("texto ex")
    const [corNova, setCorNova] = useState("green")

    return (
    <div>
    <h1 style={{color: corNova}}>{texto}</h1>
    <button onClick={() => {setTexto("Mudando o texto com botão!!!")}}>Mudar texto</button>
    <button onClick={() => {setCorNova("blue")}}>Mudar cor</button>
    </div>
    )
    }
export default Exemplo