import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
})

const theme = createTheme({
  palette: {},
  typography: {
    button: {
      textTransform: "none"
    }
  }
})

export default theme