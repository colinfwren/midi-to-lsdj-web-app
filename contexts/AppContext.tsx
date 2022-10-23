import { createContext, useState } from 'react'
import { AppContext } from "../types";

const initialContextState: AppContext = {
  data: null,
  setData: () => {},
  isLoading: false,
  setIsLoading: () => {}
}

const AppContext = createContext<AppContext>(initialContextState)

const { Provider } = AppContext

type AppProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Provider value={{ data, setData, isLoading, setIsLoading }}>
      {children}
    </Provider>
  )
}

export const AppConsumer = AppContext.Consumer

export default AppContext