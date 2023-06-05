import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 660px) {
    img {
      max-width: 15rem;
    }
  }
`
export const NewTransactionButton = styled.button`
  height: 3.125rem;
  padding: 0 1.25rem;
  font-weight: 700;
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
