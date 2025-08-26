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
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                <Crown className="text-white text-xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Panel de Moderador</h1>
                                <p className="text-gray-600">Código de sala: <span className="font-mono font-bold text-purple-600">{props.gameState.roomCode}</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users className="text-lg" />
                            <span className="font-semibold">{props.gameState.players.length} jugadores</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Crear Pregunta</h2>
                        <QuestionForm {...props} isGameActive={props.gameState.isGameActive} />            {props.gameState.currentQuestion && (
                            <ActiveQuestionPreview gameState={props.gameState} />
                        )}
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Jugadores</h2>
                        <PlayerList players={props.gameState.players} />
                    </div>
                </div>
            </div>
        </div>
    )
}