import React from 'react'
import { RoleSelectionScreen } from '../components/role-selection/RoleSelectionScreen'

interface Props {
  playerName: string
  roomCode: string
  onPlayerNameChange: (name: string) => void
  onRoomCodeChange: (code: string) => void
  onCreateRoom: () => void
  onJoinRoom: () => void
}

export const RoleSelectionPage: React.FC<Props> = (props) => {
  return <RoleSelectionScreen {...props} />
}