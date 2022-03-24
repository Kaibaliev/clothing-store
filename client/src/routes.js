import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {BasketPage} from './pages/BasketPage'
import {CreatePage} from './pages/CreatePage'
import {AuthPage} from './pages/AuthPage'
import {UserPage} from './pages/UserPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/basket/:id" element={<BasketPage/>}/>
        <Route path="/*" element={<Navigate to="/create" replace/>}/>
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route path="/*" element={<Navigate to="/create"/>}/>
    </Routes>
  )
}