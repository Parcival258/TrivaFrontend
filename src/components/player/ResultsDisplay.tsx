import React from 'react'
import { Trophy } from 'lucide-react'
import type { Player } from '../../types/game.types'

interface Props {
  players: Player[]
  currentPlayerName: string
}

export const ResultsDisplay: React.FC<Props> = ({ players, currentPlayerName }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <div className="text-center mb-6">
        <Trophy className="text-4xl text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Resultados de la Ronda</h2>
      </div>

      <div className="max-w-md mx-auto space-y-3">
        {players
          .sort((a, b) => b.score - a.score)
          .map((player, index) => (
            <div
              key={player.id}
              className={`flex items-center justify-between p-4 rounded-xl ${
                player.name === currentPlayerName ? 'bg-blue-100 border-2 border-blue-300' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2 ${
                    index === 0 ? 'bg-yellow-500' :
                    index === 1 ? 'bg-gray-400' :
                    'bg-orange-500'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="font-medium text-gray-800">{player.name}</span>
                {player.name === currentPlayerName && <span className="text-blue-600 font-semibold">(Tú)</span>}
              </div>
              <span className="font-bold text-purple-600 text-lg">{player.score} pts</span>
            </div>
          ))}
      </div>
    </div>
  )
}