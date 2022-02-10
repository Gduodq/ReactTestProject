import React from 'react'
import ReactDOM from 'react-dom'
import { RoutesConfig } from './components/RoutesConfig/RoutesConfig'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import './index.css'

const cache = createCache({
  key: 'css',
  prepend: true,
})

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <RoutesConfig />
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
