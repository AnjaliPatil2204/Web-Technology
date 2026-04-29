import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)
  const fname = "Anjali"
  const age = 20
  const name = "Anjali"

  return (
    <>
    <h1>{fname}</h1>
    <h1>{age}</h1>
    <Student/>
    </>
  )
  
    
}

export default App
