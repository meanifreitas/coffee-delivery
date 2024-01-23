import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-top: 5.875rem;
  display: flex;
  gap: 3.5rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  .cart,
  .package,
  .coffee,
  .timer {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      padding: 8px;
      border-radius: 25px;
      color: ${(props) => props.theme.background};
      display: inline-block;
      height: 2rem;
    }
  }

  .cart span {
    background: ${(props) => props.theme['yellow-dark']};
  }

  .package span {
    background: ${(props) => props.theme.yellow};
  }

  .timer span {
    background: ${(props) => props.theme['base-text']};
  }

  .coffee span {
    background: ${(props) => props.theme.purple};
  }
`

export const InfoContent = styled.div`
  margin-top: 4.46rem;
  display: flex;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.2;
  color: ${(props) => props.theme['base-title']};
  word-wrap: break-word;
`

export const Subtitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`
