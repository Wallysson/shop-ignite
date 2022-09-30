import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },

  body: {
    color: '$gray100',
    backgroundColor: '$gray900',
    '-webkit-font-smoothing': 'antialised',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})