import { FieldError } from 'react-hook-form'
import { InputContainer } from './styles'

interface TextInputProps {
  placeHolder: string
  className?: string
  error?: FieldError
}

export function TextInput({ placeHolder, className, error }: TextInputProps) {
  return (
    <>
      <InputContainer placeholder={placeHolder} className={className} />
      {error?.message ? <p>{error.message}</p> : null}
    </>
  )
}
