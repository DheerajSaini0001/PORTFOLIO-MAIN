import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Contact from './Component/Contact'
import Whoiam from './Component/Whoiam'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
  <Whoiam/>
   <Contact/>
    </>
  )
}

export default App
