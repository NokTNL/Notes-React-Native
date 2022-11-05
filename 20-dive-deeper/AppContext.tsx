import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { SetState } from './models/react'

type AppContextType = {
  userNumber: number | null
  setUserNumber: SetState<number | null>
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [userNumber, setUserNumber] = useState<number | null>(null)

  const state = {
    userNumber,
    setUserNumber,
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === null) throw Error('AppContext not initialised')
  return context
}
