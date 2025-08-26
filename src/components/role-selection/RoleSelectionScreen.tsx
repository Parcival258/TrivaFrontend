import React from 'react'
import { Users, Crown, User } from 'lucide-react'

interface Props {
  playerName: string
  roomCode: string
  onPlayerNameChange: (name: string) => void
  onRoomCodeChange: (code: string) => void
  onCreateRoom: () => void
  onJoinRoom: () => void
}

export const RoleSelectionScreen: React.FC<Props> = ({
  playerName,
  roomCode,
  onPlayerNameChange,
  onRoomCodeChange,
  onCreateRoom,
  onJoinRoom
}) => {
  return (
    <div className="w-screen h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-gray-200">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Trivia Multijugador
          </h1>
          <p className="text-gray-500 text-sm">Elige tu rol para comenzar</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onCreateRoom}
            className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium text-base hover:bg-gray-900 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Crown size={20} />
            Ser Moderador
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray-400">o</span>
            </div>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Tu nombre"
              value={playerName}
              onChange={(e) => onPlayerNameChange(e.target.value)}
              className="w-full text-gray-900 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-700 focus:border-gray-700 text-sm"
            />
            <input
              type="text"
              placeholder="Código de sala (ej: AB12)"
              value={roomCode}
              onChange={(e) => onRoomCodeChange(e.target.value.toUpperCase())}
              className="w-full text-gray-900 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-700 focus:border-gray-700 text-sm"
            />
            <button
              onClick={onJoinRoom}
              disabled={!playerName || !roomCode}
              className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-medium text-base hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <User size={20} />
              Unirse como Jugador
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
