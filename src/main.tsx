import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from './app/app-store'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './app/app-router'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  </StrictMode>,
)
