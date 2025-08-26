import { io, Socket } from 'socket.io-client'
import type { Question } from '../types/game.types'

const SOCKET_URL = 'http://localhost:3001'

class SocketService {
  private socket: Socket | null = null

  connect() {
    this.socket = io(SOCKET_URL)
    return this.socket
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  createRoom() {
    this.socket?.emit('create-room')
  }

  joinRoom(roomCode: string, playerName: string) {
    this.socket?.emit('join-room', { roomCode, playerName })
  }

  startQuestion(question: Question) {
    this.socket?.emit('start-question', question)
  }

  submitAnswer(questionId: string, answerIndex: number) {
    this.socket?.emit('submit-answer', { questionId, answerIndex })
  }

  on(event: string, callback: (data: any) => void) {
    this.socket?.on(event, callback)
  }

  off(event: string, callback?: (data: any) => void) {
    this.socket?.off(event, callback)
  }
}

export default new SocketService()