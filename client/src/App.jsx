import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router'

export default function App() {  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
