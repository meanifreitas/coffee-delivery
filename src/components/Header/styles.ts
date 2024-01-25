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

export const Cart = styled.button`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  .cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
`
