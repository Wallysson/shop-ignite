import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
  width: '3rem',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',
  background: '$gray800',
  color: '$gray500',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
  },

  svg: {
    fontSize: 24
  }
})