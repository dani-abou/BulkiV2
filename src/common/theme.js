const Color = require('color');
import { createTheme } from '@mui/material/styles';
import { lightBlue, teal, purple, grey } from '@mui/material/colors';

const PALETTE = {
  primary: lightBlue,
  secondary: teal,
  info: purple,
}

//Colors incoroporates a color object to include functions such as lighten, darken , alpha...
//All palette get included in colors

const colors = {
  surface: Color('#ffffff'),
  onSurface: Color('#616161'),
  background: Color('#f0f0f0'),
  error: Color('#d32f2f'),
  success: Color('#2e7d32'),
  warning: Color('#ed6c02')
}

Object.keys(PALETTE).forEach(k => {
  colors[k] = Color(PALETTE[k][500])
})

const theme = {
  ...createTheme({
    palette: PALETTE,
    typography: {
      fontFamily: [
        'puffin-display-soft',
        'Roboto'
      ].join(),
    }
  }), colors
}


export default theme