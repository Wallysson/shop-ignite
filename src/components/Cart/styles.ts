import { styled } from "../../styles"
import * as Dialog from '@radix-ui/react-dialog'


export const CartContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  h2: {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$gray100',
    marginBottom: '2rem'
  },

  "> section": {
    display:'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflowY: 'auto'
  }
})

export const CartClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '$gray500'
})

export const CartProduct = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  width: '100%',
  height: '5.8rem',
})

export const CartProductImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '5.8rem',
  height: '5.8rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover'
  }
})

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    border: 'none',
    background: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
})

export const CartFinish = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    background: '$green500',
    fontSize: '$md',
    fontWeight: 'bold',
    borderRadius: 8,
    border: 'none',
    height: '4.3rem',
    cursor: 'pointer',
    color: '$white',

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    }
  }
})

export const FinishDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      }
    }
  }
})
