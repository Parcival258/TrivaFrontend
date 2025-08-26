import React from 'react'
import { Play } from 'lucide-react'

interface Props {
  questionText: string
  option1: string
  option2: string
  option3: string
  option4: string
  correctAnswerIndex: number
  timeLimit: number
  isGameActive: boolean
  onQuestionTextChange: (text: string) => void
  onOption1Change: (text: string) => void
  onOption2Change: (text: string) => void
  onOption3Change: (text: string) => void
  onOption4Change: (text: string) => void
  onCorrectAnswerChange: (index: number) => void
  onTimeLimitChange: (limit: number) => void
  onStartQuestion: () => void
}

export const QuestionForm: React.FC<Props> = ({
  questionText,
  option1,
  option2,
  option3,
  option4,
  correctAnswerIndex,
  timeLimit,
  isGameActive,
  onQuestionTextChange,
  onOption1Change,
  onOption2Change,
  onOption3Change,
  onOption4Change,
  onCorrectAnswerChange,
  onTimeLimitChange,
  onStartQuestion
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Pregunta</label>
        <textarea
          value={questionText}
          onChange={(e) => onQuestionTextChange(e.target.value)}
          placeholder="Escribe tu pregunta aquí..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none h-24"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { value: option1, setter: onOption1Change, label: 'Opción A' },
          { value: option2, setter: onOption2Change, label: 'Opción B' },
          { value: option3, setter: onOption3Change, label: 'Opción C' },
          { value: option4, setter: onOption4Change, label: 'Opción D' },
        ].map((opt, idx) => (
          <div key={idx}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{opt.label}</label>
            <input
              type="text"
              value={opt.value}
              onChange={(e) => opt.setter(e.target.value)}
              placeholder={`Opción ${String.fromCharCode(65 + idx)}`}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Respuesta Correcta</label>
        <select
          value={correctAnswerIndex}
          onChange={(e) => onCorrectAnswerChange(parseInt(e.target.value))}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value={0}>Opción A</option>
          <option value={1}>Opción B</option>
          <option value={2}>Opción C</option>
          <option value={3}>Opción D</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo Límite (segundos)</label>
        <input
          type="number"
          value={timeLimit}
          onChange={(e) => onTimeLimitChange(parseInt(e.target.value))}
          min="10"
          max="300"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <button
        onClick={onStartQuestion}
        disabled={!questionText || !option1 || !option2 || !option3 || !option4 || isGameActive}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="text-xl" />
        Lanzar Pregunta
      </button>
    </div>
  )
}