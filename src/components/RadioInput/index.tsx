import { ReactNode } from 'react'
import { InputContainer } from './styles'

interface Props {
  children?: ReactNode
  value: string
  isSelected: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function RadioInput({ children, value, isSelected, onChange }: Props) {
  return (
    <InputContainer>
      <input
        type="radio"
        value={value}
        checked={isSelected}
        onChange={onChange}
      />
      {children}
    </InputContainer>
  )
}
