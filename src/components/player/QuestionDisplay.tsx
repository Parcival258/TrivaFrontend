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
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Clock className="text-2xl text-blue-600" />
          <span className="text-3xl font-bold text-blue-600">{timeRemaining}s</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.text}</h2>
      </div>

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

      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null || timeRemaining === 0}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirmar Respuesta
        </button>
      </div>
    </div>
  )
}