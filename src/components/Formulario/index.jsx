import { useState, useEffect } from "react"

const Formulario = () => {
    
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(()=>{
        console.log('O componente iniciou')
        return(
            console.log("O componente finalizou")
        )
    }, [])

    useEffect(()=>{
        console.log(`O nome mudou para ${nome}`)
    },[nome])

    const renderizaResultado = () => {
        const soma = Number(materiaA) + Number(materiaB) + Number(materiaC)
        const media = soma / 3
        if (media >= 6){
            return(
                'você foi Aprovado'
            )
        }
        else{
            return (
                'você foi Reprovado'
            )
        }
    }

    return(
        <form>
            <ul>{[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}</ul>
            <input type="text" placeholder="Insira seu nome" onChange={evento => setNome(evento.target.value)}/>
            <input type="number"placeholder="Nota Matéria A" onChange={evento => setMateriaA(evento.target.value) }/>
            <input type="number"placeholder="Nota Matéria B" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number"placeholder="Nota Matéria C" onChange={evento => setMateriaC(evento.target.value)}/>
            <p>Olá {nome}, {renderizaResultado()}</p>
        </form>
    )
}

export default Formulario
