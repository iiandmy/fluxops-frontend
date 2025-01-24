import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from './app/app-store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={appStore}>
      <App />
    </ReduxProvider>
  </StrictMode>,
)
