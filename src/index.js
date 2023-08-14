import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import reducer from './redux/reducers'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
)
