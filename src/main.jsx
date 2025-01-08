import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './assets/Lang/index.jsx'
import { ThemeProvider } from './assets/Modes/index.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LanguageProvider>
        <App />
    </LanguageProvider>
  </ThemeProvider>


)