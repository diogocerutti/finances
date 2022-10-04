import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './global/styles/theme'
import { CssBaseline } from '@mui/material'
import { HomePage } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  )
}
