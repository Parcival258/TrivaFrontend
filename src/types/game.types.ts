export interface Player {
  id: string
  name: string
  score: number
}

export interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
  timeLimit: number
}

export interface GameState {
  roomCode: string
  players: Player[]
  currentQuestion: Question | null
  timeRemaining: number
  showResults: boolean
  isGameActive: boolean
}

export type UserRole = 'moderator' | 'player' | null