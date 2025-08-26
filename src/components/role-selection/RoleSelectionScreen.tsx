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
    <div className="w-screen h-screen min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Trivia Multijugador</h1>
          <p className="text-gray-600">Elige tu rol para comenzar</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onCreateRoom}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
          >
            <Crown className="text-xl" />
            Ser Moderador
          </button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">o</span>
            </div>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Tu nombre"
              value={playerName}
              onChange={(e) => onPlayerNameChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Código de sala (ej: AB12)"
              value={roomCode}
              onChange={(e) => onRoomCodeChange(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={onJoinRoom}
              disabled={!playerName || !roomCode}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <User className="text-xl" />
              Unirse como Jugador
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}