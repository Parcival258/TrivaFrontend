import React from 'react'
import { Users } from 'lucide-react'
import type { Player } from '../../types/game.types'

interface Props {
  players: Player[]
}

export const PlayerList: React.FC<Props> = ({ players }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Users className="text-lg" />
        <h3 className="text-lg font-bold text-gray-800">Jugadores</h3>
      </div>

      <div className="space-y-3">
        {players.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Esperando jugadores...</p>
        ) : (
          players
            .sort((a, b) => b.score - a.score)
            .map((player, index) => (
              <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' :
                      index === 1 ? 'bg-gray-400' :
                      index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-800">{player.name}</span>
                </div>
                <span className="font-bold text-purple-600">{player.score} pts</span>
              </div>
            ))
        )}
      </div>
    </div>
  )
}