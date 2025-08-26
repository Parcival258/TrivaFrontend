import React from 'react'
import { PlayerGame } from '../components/player/PlayerGame'
import type { GameState } from '../types/game.types'

interface Props {
  playerName: string
  gameState: GameState
  onSubmitAnswer: (questionId: string, answerIndex: number) => void
}

export const PlayerPage: React.FC<Props> = (props) => {
  return <PlayerGame {...props} />
}