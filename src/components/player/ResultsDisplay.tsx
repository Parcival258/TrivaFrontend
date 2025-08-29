import React, { useMemo } from 'react'
import { Trophy } from 'lucide-react'
import type { Player } from '../../types/game.types'

interface Props {
  players: Player[]
  currentPlayerName: string
}

export const ResultsDisplay: React.FC<Props> = ({ players, currentPlayerName }) => {
  // ✅ useMemo para evitar reordenamientos innecesarios en cada render
  const sortedPlayers = useMemo(
    () => [...players].sort((a, b) => b.score - a.score),
    [players]
  )

  return (
    <section
      className="bg-white rounded-2xl shadow-xl p-8 mb-6"
      aria-labelledby="results-title"
    >
      <div className="text-center mb-6">
        <Trophy
          className="w-12 h-12 text-yellow-500 mx-auto mb-4"
          aria-hidden="true"
        />
        <h2 id="results-title" className="text-2xl font-bold text-gray-800">
          Resultados de la Ronda
        </h2>
      </div>

      <ul className="max-w-md mx-auto space-y-3">
        {sortedPlayers.map((player, index) => {
          const isCurrentPlayer = player.name === currentPlayerName

          return (
            <li
              key={player.id}
              className={`flex items-center justify-between p-4 rounded-xl transition ${
                isCurrentPlayer
                  ? 'bg-blue-100 border-2 border-blue-300'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Medalla / posición */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0
                      ? 'bg-yellow-500'
                      : index === 1
                      ? 'bg-gray-400'
                      : 'bg-orange-500'
                  }`}
                  aria-label={`Posición ${index + 1}`}
                >
                  {index + 1}
                </div>

                {/* Nombre del jugador */}
                <span className="font-medium text-gray-800">
                  {player.name}
                </span>

                {/* Indicador del jugador actual */}
                {isCurrentPlayer && (
                  <span className="text-blue-600 font-semibold">(Tú)</span>
                )}
              </div>

              {/* Puntaje */}
              <span
                className="font-bold text-purple-600 text-lg"
                aria-label={`Puntaje: ${player.score} puntos`}
              >
                {player.score} pts
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
