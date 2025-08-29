import React from 'react'
import type { GameState } from '../../types/game.types'

interface Props {
  gameState: GameState
}

export const ActiveQuestionPreview: React.FC<Props> = ({ gameState }) => {
  if (!gameState.currentQuestion) return null

  return (
    <div className="grid grid-cols-2 gap-3 text-sm mt-4">
      {gameState.currentQuestion.options.map((option, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg border-2 ${index === gameState.currentQuestion!.correctAnswer
              ? 'bg-green-100 border-green-400 text-green-800 font-bold'
              : 'bg-gray-100 border-gray-300'
            }`}
        >
          <span className="font-mono">{String.fromCharCode(65 + index)}.</span> {option}
        </div>
      ))}
    </div>
  )
}