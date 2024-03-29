import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

interface SumarryCardProps {
  variant?: 'green'
}

export const SumarryCard = styled.div<SumarryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}

  @media (max-width: 660px) {
    padding: 1rem 1.5rem;

    header {
      svg {
        width: 2rem;
      }
    }

    strong {
      margin-top: 0.5rem;
      font-size: 1.5rem;
    }

    &:last-child {
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }
`
