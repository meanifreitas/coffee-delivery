import { ReactNode } from 'react'
import { InputContainer } from './styles'

interface Props {
  children?: ReactNode
  value: string
  isSelected: boolean
}

export function RadioInput({ children, value, isSelected }: Props) {
  return (
    <InputContainer>
      <input type="radio" value={value} checked={isSelected} />
      {children}
    </InputContainer>
  )
}
