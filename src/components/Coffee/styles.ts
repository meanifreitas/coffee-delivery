import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  & + & {
    margin: 1.5rem 0;
  }

  & > img {
    width: 4rem;
    margin-right: 1.25rem;
  }
`

export const RemoveCoffee = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  background: ${(props) => props.theme['base-button']};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;

  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;

  & > svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const Price = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: right;
  margin-left: auto;
`

export const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
`
