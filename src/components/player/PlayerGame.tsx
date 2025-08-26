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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Hola, {playerName}!</h1>
              <p className="text-gray-600">Sala: <span className="font-mono font-bold text-blue-600">{gameState.roomCode}</span></p>
            </div>
          </div>
        </div>

        {gameState.currentQuestion && !gameState.showResults ? (
          <QuestionDisplay 
            question={gameState.currentQuestion} 
            timeRemaining={gameState.timeRemaining}
            onSubmitAnswer={onSubmitAnswer}
          />
        ) : gameState.showResults ? (
          <ResultsDisplay players={gameState.players} currentPlayerName={playerName} />
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-gray-400 mb-4">
              <div className="text-4xl mb-4">⏳</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Esperando pregunta...</h2>
            <p className="text-gray-600">El moderador está preparando la siguiente pregunta</p>
          </div>
        )}
      </div>
    </div>
  )
}