import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { AuthProviderWrapper } from './context/auth.context'

createRoot(document.getElementById('root')!).render(

    <AuthProviderWrapper> 
      <App />
    </AuthProviderWrapper>

)