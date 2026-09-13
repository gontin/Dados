import Dado from "./Dado"
import { useState } from "react"

export default function JogoDados({ player, onJogar, bloqueado, fim }) {

    const [dado1, setDado1] = useState(1)
    const [dado2, setDado2] = useState(1)
    const [soma, setSoma] = useState(1)
    
    function handlePlay() {
        const numSort = Math.floor(Math.random() * 6) +1
        const numSort2 = Math.floor(Math.random() * 6) +1
        const total = numSort + numSort2

        setDado1(numSort)
        setDado2(numSort2)
        setSoma(total)

        onJogar(total)
    }

    return (
        <div className="flex flex-col items-center ">
            <h3>Jogador {player}</h3>
            <div className="flex">
                <Dado valor={dado1} />
                <Dado valor={dado2} />
            </div>

            <h4>Valor: {soma}</h4>

            <button 
                className="bg-gray-900 w-40 h-12 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-opacity text-white" 
                type="button" 
                onClick={handlePlay} 
                disabled={bloqueado || fim}
            >
                {bloqueado ? "Aguarde..." : "Jogar"}
            </button>
        </div>
    )
}