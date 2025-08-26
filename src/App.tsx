import React, { useState, useCallback } from 'react'
import { useGameSocket } from './hooks/useGameSocket'
import { RoleSelectionPage } from './pages/RoleSelectionPage'
import { ModeratorPage } from './pages/ModeratorPage'
import { PlayerPage } from './pages/PlayerPage'
import type { UserRole } from './types/game.types'

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [playerName, setPlayerName] = useState('')
  const [roomCode, setRoomCode] = useState('')

  const { gameState, socketService } = useGameSocket()

  const [questionText, setQuestionText] = useState('')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0)
  const [timeLimit, setTimeLimit] = useState(30)

  const createRoom = useCallback(() => {
    socketService.createRoom()
    setUserRole('moderator')
  }, [socketService])

  const joinRoom = useCallback(() => {
    if (playerName && roomCode) {
      socketService.joinRoom(roomCode, playerName)
      setUserRole('player')
    }
  }, [socketService, playerName, roomCode])

  const startQuestion = useCallback(() => {
    if (questionText && option1 && option2 && option3 && option4) {
      const question = {
        id: Date.now().toString(),
        text: questionText,
        options: [option1, option2, option3, option4],
        correctAnswer: correctAnswerIndex,
        timeLimit
      }
      
      socketService.startQuestion(question)
      setQuestionText('')
      setOption1('')
      setOption2('')
      setOption3('')
      setOption4('')
      setCorrectAnswerIndex(0)
    }
  }, [questionText, option1, option2, option3, option4, correctAnswerIndex, timeLimit, socketService])

  const submitAnswer = useCallback((questionId: string, answerIndex: number) => {
    socketService.submitAnswer(questionId, answerIndex)
  }, [socketService])

  if (!userRole) {
    return (
      <RoleSelectionPage
        playerName={playerName}
        roomCode={roomCode}
        onPlayerNameChange={setPlayerName}
        onRoomCodeChange={setRoomCode}
        onCreateRoom={createRoom}
        onJoinRoom={joinRoom}
      />
    )
  }

  if (userRole === 'moderator') {
    return (
      <ModeratorPage
        gameState={gameState}
        questionText={questionText}
        option1={option1}
        option2={option2}
        option3={option3}
        option4={option4}
        correctAnswerIndex={correctAnswerIndex}
        timeLimit={timeLimit}
        onQuestionTextChange={setQuestionText}
        onOption1Change={setOption1}
        onOption2Change={setOption2}
        onOption3Change={setOption3}
        onOption4Change={setOption4}
        onCorrectAnswerChange={setCorrectAnswerIndex}
        onTimeLimitChange={setTimeLimit}
        onStartQuestion={startQuestion}
      />
    )
  }

  return (
    <PlayerPage
      playerName={playerName}
      gameState={gameState}
      onSubmitAnswer={submitAnswer}
    />
  )
}

export default App