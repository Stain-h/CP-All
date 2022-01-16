import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Page from 'pages/Page'
import MyPage from 'pages/MyPage'

function Router({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/page" element={<Page />} ></Route>
        <Route path="/user" element={<MyPage isLoggedIn={isLoggedIn} />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
