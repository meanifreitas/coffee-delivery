import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const AddressForm = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    gap: 1rem;
    max-width: 100%;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .zipCode {
    max-width: 30%;

    @media (max-width: 1024px) {
      max-width: 50%;
    }
  }

  .reference,
  .city {
    max-width: 100%;
  }

  .reference {
    width: 100%;
  }
`

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;

  & > div > h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div > p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentForm = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > label {
    border-radius: 6px;
    display: inline-block;
    text-transform: uppercase;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    padding: 1rem;
    flex: 1;
    cursor: pointer;

    display: flex;
    gap: 0.75rem;

    & > svg {
      color: ${(props) => props.theme.purple};
    }

    & > input {
      display: none;
    }
  }

  input:checked {
    display: block;
  }
`

export const CoffeesContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 23rem;
`

export const CoffeesList = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px 6px 44px;
`

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};

  &.bold {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const InfoValue = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};

  &.bold {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Button = styled.button`
  padding: 0.75rem 0.5rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border-radius: 6px;
  margin-top: 1.5rem;
`
