import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'; // Adjust this according to your library's path
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Signup/>
    </>
  )
}

export default App
