import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import  Main  from './components/Main'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Routes>
          <Route path = '/' element = {<Layout />} />

      </Routes>
    </>
  )
}

export default App
