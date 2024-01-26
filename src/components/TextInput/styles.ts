import styled from 'styled-components'

export const InputContainer = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};

  &:focus {
    outline: 1px solid ${(props) => props.theme.purple};
  }
`
