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
      className={`w-full p-4 text-left rounded-2xl border transition-all duration-200 shadow-sm
        ${selected
          ? 'bg-blue-100 border-blue-500 text-blue-700'
          : 'bg-blue-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
        } 
        disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold
            ${selected
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-900'
            }`}
        >
          {String.fromCharCode(65 + index)}
        </div>
        <span className="text-lg text-gray-900">{option}</span>
      </div>
    </button>
  )
}
