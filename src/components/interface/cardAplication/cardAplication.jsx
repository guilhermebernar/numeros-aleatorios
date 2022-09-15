import "./cardaplication.css"
import { useState } from "react"

const Cardaplication = ()=>{

    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)
    
    const newRandom = ()=>{
        setNumber(Math.floor(Math.random() * 100) + 1)
    }

    return (
        <div className="container">
            <h1>{number}</h1>
            <button onClick={()=>{newRandom()}}>Gerar</button>
        </div>
    )
}

export default Cardaplication