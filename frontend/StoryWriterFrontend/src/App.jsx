import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Studio from './pages/Studio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/studio" element={<Studio />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
