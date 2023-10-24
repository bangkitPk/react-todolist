import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-600 hover:text-5xl transition-all">
      Hello world!
    </h1>
    </>
  )
}

export default App
