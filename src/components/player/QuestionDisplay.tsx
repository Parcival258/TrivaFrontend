import React, { useState } from 'react'
import { Clock } from 'lucide-react'
import type { Question } from '../../types/game.types'
import { AnswerOption } from './AnswerOption'

interface Props {
  question: Question
  timeRemaining: number
  onSubmitAnswer: (questionId: string, answerIndex: number) => void
}

export const QuestionDisplay: React.FC<Props> = ({ question, timeRemaining, onSubmitAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onSubmitAnswer(question.id, selectedOption)
      setSelectedOption(null)
    }
  }

  return (
    <div className="bg-blue-50 rounded-2xl shadow-md border border-gray-200 p-8 mb-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Clock className="text-blue-600" size={28} />
          <span className="text-3xl font-bold text-blue-600">{timeRemaining}s</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{question.text}</h2>
      </div>

      {/* Opciones */}
      <div className="max-w-2xl mx-auto space-y-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            index={index}
            selected={selectedOption === index}
            disabled={timeRemaining === 0}
            onSelect={() => setSelectedOption(index)}
          />
        ))}
      </div>

      {/* Botón */}
      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null || timeRemaining === 0}
          className="bg-blue-600 text-white py-3 px-8 rounded-2xl font-medium text-lg
                     hover:bg-blue-700 transition-all duration-200
                     shadow-sm hover:shadow-md
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirmar Respuesta
        </button>
      </div>
    </div>
  )
}
