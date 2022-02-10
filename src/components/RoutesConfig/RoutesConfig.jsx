import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from 'App'

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teste" element={<div>Teste</div>} />
      </Routes>
    </BrowserRouter>
  )
}
