import { useState } from 'react'
import './App.css'
import AskMe from './screens/ask-me/AskMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to OTT Predictor</h1>
    <p>Find out where to watch your favorite movies and shows!</p>

    <AskMe />
    <footer>
      <p>© 2025 OTT Predictor. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
