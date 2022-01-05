import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Page from 'pages/Page'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/page" element={<Page />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
