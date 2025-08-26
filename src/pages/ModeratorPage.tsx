import React from 'react'
import { ModeratorPanel } from '../components/moderator/ModeratorPanel'
import type { GameState } from '../types/game.types'

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

export const ModeratorPage: React.FC<Props> = (props) => {
  return <ModeratorPanel {...props} />
}