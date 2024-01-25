import styled from 'styled-components'

export const LocationContainer = styled.p`
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
