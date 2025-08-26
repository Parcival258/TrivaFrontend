import React from 'react'
import { Crown, Users } from 'lucide-react'
import { QuestionForm } from './QuestionsForm'
import { PlayerList } from './PlayerList'
import { ActiveQuestionPreview } from './ActiveQuestionPreview'
import type { GameState } from '../../types/game.types'

interface Props {
  gameState: GameState
  questionText: string
  option1: string
  option2: string
  option3: string
  option4: string
  correctAnswerIndex: number
  timeLimit: number
  onQuestionTextChange: (text: string) => void
  onOption1Change: (text: string) => void
  onOption2Change: (text: string) => void
  onOption3Change: (text: string) => void
  onOption4Change: (text: string) => void
  onCorrectAnswerChange: (index: number) => void
  onTimeLimitChange: (limit: number) => void
  onStartQuestion: () => void
}

export const ModeratorPanel: React.FC<Props> = (props) => {
  return (
    <div className="w-screen h-screen min-h-screen bg-blue-50 p-6 flex">
      <div className="max-w-7xl w-full mx-auto flex flex-col space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            {/* Logo + Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <Crown className="text-white" size={22} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Panel de Moderador</h1>
                <p className="text-gray-500 text-sm">
                  Código de sala:{' '}
                  <span className="font-mono font-semibold text-gray-800">
                    {props.gameState.roomCode}
                  </span>
                </p>
              </div>
            </div>

            {/* Contador jugadores */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Users size={18} />
              <span className="font-medium">{props.gameState.players.length} jugadores</span>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 grid lg:grid-cols-3 gap-6 overflow-hidden">
          {/* Sección Preguntas */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col overflow-y-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Crear Pregunta</h2>
            <QuestionForm {...props} isGameActive={props.gameState.isGameActive} />

            {props.gameState.currentQuestion && (
              <div className="mt-6">
                <ActiveQuestionPreview gameState={props.gameState} />
              </div>
            )}
          </div>

          {/* Sección Jugadores */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col overflow-y-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Jugadores</h2>
            <PlayerList players={props.gameState.players} />
          </div>
        </div>
      </div>
    </div>
  )
}
