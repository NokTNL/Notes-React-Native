import { AppContextProvider } from './AppContext'
import { CustomApp } from './CustomApp'

export default function App() {
  return (
    <AppContextProvider>
      <CustomApp />
    </AppContextProvider>
  )
}
