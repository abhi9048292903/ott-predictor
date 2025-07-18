import './App.css'
import AskMe from './screens/ask-me/AskMe'
import Home from './screens/Home'
import Movies from './screens/Movies'
import Platforms from './screens/Platforms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs'
import { Container } from '@mui/material';



function App() {
  return (
    <div className="app-root">
    <Router>
      <Tabs />
      <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask-me" element={<AskMe />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      </div>
      <div className="app-footer">
        <p>© 2025 OTT Predictor. All rights reserved.</p>
      </div>
    </Router>
    </div>
  )
}

export default App
