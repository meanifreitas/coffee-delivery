import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  border-radius: 6px;
  text-transform: uppercase;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  padding: 1rem;
  flex: 1;
  cursor: pointer;

  & > input {
    display: none;
  }

  input:checked + span {
    color: red;
  }

  & > svg {
    color: ${(props) => props.theme.purple};
  }
`
