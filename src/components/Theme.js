import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import primary from '@material-ui/core/colors/teal'
import secondary from '@material-ui/core/colors/deepOrange'

import { get } from '../services/local'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    type: get('is_darktheme') ? 'dark' : 'light',
    primary: {
      light: primary[700],
      main: primary[800],
      dark: primary[900],
    },
    secondary: {
      light: secondary[300],
      main: secondary[500],
      dark: secondary[700],
    },
  },
})

export default Component => props => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Component {...props} />
  </ThemeProvider>
)