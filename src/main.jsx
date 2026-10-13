import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/react'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider
      publishableKey={publishableKey}
      signInUrl='/auth/sign-in'
      signUpUrl='/auth/sign-up'
      signUpFallbackRedirectUrl="/auth/sign-in"
      signInFallbackRedirectUrl="/dashboard"
    >
      <App />
    </ClerkProvider>
  </BrowserRouter>
)
