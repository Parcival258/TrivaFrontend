import { useEffect, useState } from 'react'
import socketService from '../services/socketService'
import type { GameState } from '../types/game.types'

export const useGameSocket = () => {
  const [gameState, setGameState] = useState<GameState>({
    roomCode: '',
    players: [],
    currentQuestion: null,
    timeRemaining: 0,
    showResults: false,
    isGameActive: false
  })

  useEffect(() => {
    socketService.connect()

    socketService.on('room-created', (data) => {
      setGameState(prev => ({ ...prev, roomCode: data.roomCode }))
    })

    socketService.on('player-joined', (data) => {
      setGameState(prev => ({ ...prev, players: data.players }))
    })

    socketService.on('question-started', (data) => {
      setGameState(prev => ({ 
        ...prev, 
        currentQuestion: data.question,
        timeRemaining: data.question.timeLimit,
        showResults: false,
        isGameActive: true
      }))
    })

    socketService.on('time-update', (data) => {
      setGameState(prev => ({ ...prev, timeRemaining: data.timeRemaining }))
    })

    socketService.on('round-ended', (data) => {
      setGameState(prev => ({ 
        ...prev, 
        players: data.players,
        showResults: true,
        isGameActive: false
      }))
    })

    return () => {
      socketService.disconnect()
    }
  }, [])

  return { gameState, socketService }
}