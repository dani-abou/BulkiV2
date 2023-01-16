const Color = require('color');
import { blue, deepOrange, grey, purple, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const PALETTE = {
  primary: deepOrange,
  secondary: { main: '#2452ff' },
  info: purple,
  neutral: grey
}

//Colors incoroporates a color object to include functions such as lighten, darken , alpha...
//All palette get included in colors

export const colors = {
  surface: Color('#ffffff'),
  onSurface: Color('#616161'),
  background: Color('#B0BEC5'),
  error: Color('#d32f2f'),
  success: Color('#2e7d32'),
  warning: Color('#ed6c02'),
  footer: Color('#263238'),
  footerText: Color(teal[500])
}

Object.keys(PALETTE).forEach(k => {
  colors[k] = Color(PALETTE[k].main || PALETTE[k][500])
})

const theme = {
  ...createTheme({
    palette: PALETTE,
    typography: {
      fontFamily: [
        'puffin-display-soft',
        'Roboto'
      ].join(),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1950
      }
    }
  }), colors
}


export default theme