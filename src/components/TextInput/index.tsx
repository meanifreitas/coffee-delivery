import { InputContainer } from './styles'

interface TextInputProps {
  placeHolder: string
  className?: string
}

export function TextInput({ placeHolder, className }: TextInputProps) {
  return <InputContainer placeholder={placeHolder} className={className} />
}
