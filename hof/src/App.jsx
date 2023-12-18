import { useState } from 'react'
import HOC from './Components/HOC'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HOC/>
    </>
  )
}

export default App
