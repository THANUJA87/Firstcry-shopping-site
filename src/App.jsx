import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
