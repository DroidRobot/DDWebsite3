import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/js/main.js'
import {Routes, Route} from 'react-router-dom'
import  Main  from './components/Main'
import Layout from './components/Layout'
import Driver from './components/Driver'
import Rider from './components/Rider'

function App() {

  return (
    <>
      <Routes>
          <Route path = '/' element = {<Layout />} />
          <Route path = '/driver' element = {<Driver />} />
          <Route path = '/rider' element = {<Rider />} />



      </Routes>
    </>
  )
}

export default App
