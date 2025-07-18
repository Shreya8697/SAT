import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SATLandingPage from './components/SATLandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className="text-4xl text-red-500 font-bold">Hello Tailwind!</h1> */}
    <SATLandingPage/>
    </>
  )
}

export default App
