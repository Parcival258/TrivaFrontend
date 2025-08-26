import React from 'react'
import { Clock } from 'lucide-react'
import type { GameState } from '../../types/game.types'

interface Props {
  gameState: GameState
}

export const ActiveQuestionPreview: React.FC<Props> = ({ gameState }) => {
  if (!gameState.currentQuestion) return null

  return (
    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Pregunta Activa</h3>
        <div className="flex items-center gap-2 text-blue-600">
          <Clock className="text-lg" />
          <span className="font-bold text-xl">{gameState.timeRemaining}s</span>
        </div>
      </div>
      <p className="text-gray-700 text-lg mb-3">{gameState.currentQuestion.text}</p>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {gameState.currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              index === gameState.currentQuestion!.correctAnswer
                ? 'bg-green-100 border border-green-300'
                : 'bg-gray-100'
            }`}
          >
            <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {option}
          </div>
        ))}
      </div>
    </div>
  )
}