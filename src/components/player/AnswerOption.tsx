import React from 'react'

interface Props {
  option: string
  index: number
  selected: boolean
  disabled: boolean
  onSelect: () => void
}

export const AnswerOption: React.FC<Props> = ({ option, index, selected, disabled, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
        selected
          ? 'bg-blue-100 border-blue-500 text-blue-700'
          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            selected
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
        >
          {String.fromCharCode(65 + index)}
        </div>
        <span className="text-lg">{option}</span>
      </div>
    </button>
  )
}