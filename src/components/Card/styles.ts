import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};
  width: 22%;
  border-radius: 0 36px 0 36px;
  padding: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 40%;
  }
`

export const CoffeeImage = styled.img`
  width: 7.5rem;
  position: relative;
  top: -20%;

  @media (max-width: 1024px) {
    top: -30%;
  }
`

export const Tags = styled.div`
  margin-top: -20%;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-top: -15%;
  }

  p {
    padding: 0.25rem 0.5rem;
    border-radius: 24px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
  }
`

export const CoffeeTitle = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  white-space: nowrap;
  margin-top: 1rem;
`

export const CoffeeDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  margin-top: 0.5rem;
`

export const Checkout = styled.div`
  width: 100%;
  margin: 1.5rem 1.5rem 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  span {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }

  p {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CartContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`

export const Cart = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  padding: 0.5rem;
  border-radius: 6px;
`
