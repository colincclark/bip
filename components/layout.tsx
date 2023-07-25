import Navbar from 'components/Navbar'
import { ThemeProvider } from 'components/ThemeContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider value='dark'>
      <Navbar />
      <main>
        <h1>The adventures of Colin and Francesca</h1>
        {children}
      </main>
    </ThemeProvider>
  )
}

export default Layout
