import React from 'react'
import { User } from 'lucide-react'
import { QuestionDisplay } from './QuestionDisplay'
import { ResultsDisplay } from './ResultsDisplay'
import type { GameState } from '../../types/game.types'

interface Props {
  playerName: string
  gameState: GameState
  onSubmitAnswer: (questionId: string, answerIndex: number) => void
}

export const PlayerGame: React.FC<Props> = ({ playerName, gameState, onSubmitAnswer }) => {
  return (
    <div className="w-screen h-screen min-h-screen bg-blue-50 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-6">
        {/* Header */}
        <div className="bg-blue-50 rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <User className="text-white" size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Hola, {playerName}!</h1>
              <p className="text-gray-600 text-sm">
                Sala:{' '}
                <span className="font-mono font-semibold text-gray-900">
                  {gameState.roomCode}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {gameState.currentQuestion && !gameState.showResults ? (
          <QuestionDisplay
            question={gameState.currentQuestion}
            timeRemaining={gameState.timeRemaining}
            onSubmitAnswer={onSubmitAnswer}
          />
        ) : gameState.showResults ? (
          <ResultsDisplay players={gameState.players} currentPlayerName={playerName} />
        ) : (
          <div className="bg-blue-50 rounded-xl shadow-md border border-gray-200 p-8 text-center">
            <div className="text-gray-400 mb-4">
              <div className="text-4xl mb-4">⏳</div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Esperando pregunta...</h2>
            <p className="text-gray-600">El moderador está preparando la siguiente pregunta</p>
          </div>
        )}
      </div>
    </div>
  )
}
