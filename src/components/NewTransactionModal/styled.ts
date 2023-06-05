import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      padding: 1rem;
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};

      &[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      &[type='number'] {
        -moz-appearance: textfield;
        appearance: textfield;
      }

      &[type='date'] {
        cursor: text;
      }

      &[type='date']::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
      }

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 3.625rem;
      margin-top: 1.25rem;
      padding: 0 1.25rem;
      font-weight: 700;
      border: 0;
      border-radius: 6px;

      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      cursor: pointer;
      transition: background-color 0.2s;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
      }
    }
  }

  @media (max-width: 420px) {
    min-width: 30rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  line-height: 0;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme['gray-500']};

  cursor: pointer;
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

// eslint-disable-next-line
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};

  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background 0.3s;
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    box-shadow: 0 0 0 2px
      ${(props) =>
        props.variant === 'income'
          ? props.theme['green-500']
          : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
