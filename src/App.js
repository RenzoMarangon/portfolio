import React from 'react'
import { Provider } from 'react-redux'
import { PortfolioScreen } from './components/PortfolioScreen'

import { store } from './store'

export const App = () => {
  return (
    < >
    <Provider store={ store }>
        <PortfolioScreen />
    </Provider>
    </>
  )
}
