import React from 'react'
import { Users } from 'lucide-react'
import type { Player } from '../../types/game.types'

interface Props {
  players: Player[]
}

export const PlayerList: React.FC<Props> = ({ players }) => {
  return (
    <div>
      {/* Encabezado */}
      <div className="flex items-center gap-2 mb-4">
        <Users size={18} className="text-gray-600" />
        <h3 className="text-base font-semibold text-gray-900">Jugadores</h3>
      </div>

      <div className="space-y-2">
        {players.length === 0 ? (
          <p className="text-gray-500 text-center py-6 text-sm">Esperando jugadores...</p>
        ) : (
          players
            .sort((a, b) => b.score - a.score)
            .map((player, index) => (
              <div
                key={player.id}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold
                      ${index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' :
                        index === 2 ? 'bg-orange-500' :
                        'bg-gray-700'}
                    `}
                  >
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">{player.name}</span>
                </div>
                <span className="font-semibold text-gray-700">{player.score} pts</span>
              </div>
            ))
        )}
      </div>
    </div>
  )
}
