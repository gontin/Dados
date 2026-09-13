'use client'
import JogoDados from "@/components/JogoDados";
import { useEffect, useState } from "react";

export default function Home() {
  const [rodada, setRodada] = useState(1)
  const [textoCima, setTextoCima] = useState(`Rodada ${rodada}/5`)
  const [textoBaixo, setTextoBaixo] = useState("")
  const [fim, setFim] = useState(false)

  const [vitoriap1, setVitoriap1] = useState(0)
  const [vitoriap2, setVitoriap2] = useState(0)

  const [jogadap1, setJogadap1] = useState(null)
  const [jogadap2, setJogadap2] = useState(null)
  
  useEffect (() => {
    if (jogadap1!==null && jogadap2!==null) {
      if (jogadap1>jogadap2) {
        setVitoriap1(vitoriap1+1)
        setTextoBaixo("Jogador 1 Venceu")
      } else if (jogadap2>jogadap1) {
        setVitoriap2(vitoriap2+1)
        setTextoBaixo("Jogador 2 Venceu")
      } else if (jogadap1 === jogadap2) {
        setTextoBaixo("Empate")
      }

      setTimeout(() => {
        if (rodada === 5) {
          setFim(true)
          if (vitoriap1>vitoriap2) {
            setTextoCima("Jogador 1 venceu o jogo")
          } else if (vitoriap2>vitoriap1) {
            setTextoCima("Jogador 2 venceu o jogo")
          } else if (vitoriap1===vitoriap2) {
            setTextoCima("Empate Geral")
          }
        } else {
          setRodada(rodada+1)
          setTextoCima(`Rodada ${rodada+1}/5`)
          setTextoBaixo("")
        }
        setJogadap1(null)
        setJogadap2(null)

      }, 2000);

    }


  }, [jogadap1, jogadap2])

  function reiniciar() {
    setFim(false)
    setRodada(1)
    setVitoriap1(0)
    setVitoriap2(0)
    setJogadap1(null)
    setJogadap2(null)
    setTextoCima(`Rodada 1/5`)
    setTextoBaixo("")

  }
  return (
    <main className="flex flex-col justify-center items-center h-screen text-white font-sans">
      <h1 className="text-4xl font-bold mb-2">Jogo de Dados</h1>
      <h2 className="text-xl text-gray-300 mb-6">{textoCima}</h2>
      
      <h3 className="text-lg mb-8 px-6 py-2">
        Placar: Jogador 1 ({vitoriap1}) x ({vitoriap2}) Jogador 2
      </h3>
      
      <div className="flex">
        <JogoDados 
          player={1}
          onJogar={setJogadap1}
          bloqueado={jogadap1 !== null}
          fim={fim}
        />
        
        <div className="w-[2px] bg-gray-600 mx-8 rounded-full"></div>
        
        <JogoDados
          player={2}
          onJogar={setJogadap2}
          bloqueado={jogadap1 === null || jogadap2 !== null}
          fim={fim}
        />
      </div>
      
      <h3 className="text-2xl font-bold my-6 h-8 text-yellow-400">{textoBaixo}</h3>
      
      {fim && (
          <button 
            onClick={reiniciar} 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-colors"
          >
            Jogar Novamente
          </button>
      )}
    </main>
  )}