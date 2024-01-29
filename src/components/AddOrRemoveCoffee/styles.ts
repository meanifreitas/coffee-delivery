import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  & > button {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
