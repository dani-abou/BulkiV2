const Color = require('color');

const theme = {
  colors: {
    primary: Color('#5a7cfa'),
    secondary: Color('#03a8a6'),
    surface: Color('#ffffff'),
    onSurface: Color('#262626'),
    background: Color('#f0f0f0'),
    error: Color('#e01b1b'),
    success: Color('#07ed35')
  },
  fonts: {
    families: {
      h1: 'puffin-display-soft',
      h2: 'puffin-display-soft',
      h3: 'puffin-display-soft',
      h4: 'puffin-display-soft',
      h5: 'puffin-display-soft',
      h6: 'puffin-display-soft',
      subtitle1: 'puffin-display-soft',
      subtitle2: 'puffin-display-soft',
      body1: 'puffin-display-soft',
      body2: 'puffin-display-soft',
      button: 'puffin-display-soft',
      caption: 'puffin-display-soft',
    },
    sizes: {
      h1: 32,
      h2: 24,
      h3: 18.72,
      h4: 16,
      h5: 13.28,
      h6: 12,
      subtitle1: 12,
      subtitle2: 10,
      body1: 16,
      body2: 12,
      button: 16,
      caption: 10,
    },
    weights: {
      h1: 'bold',
      h2: 'bold',
      h3: 'bold',
      h4: 'bold',
      h5: 'bold',
      h6: 'bold',
      subtitle1: 'normal',
      subtitle2: 'normal',
      body1: 'normal',
      body2: 'normal',
      button: 'normal',
      caption: 'lighter',
    }
  }
}

export default theme