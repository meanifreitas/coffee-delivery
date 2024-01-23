import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`

export const Location = styled.p`
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['purple-light']};

  display: flex;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
`

export const Cart = styled.button`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`
