import { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to OTT Predictor</h1>
    <p>Find out where to watch your favorite movies and shows!</p>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-search"
        label="Search for a movie or show"
        type="search"
        variant="outlined"
        onChange={(e) => console.log(e.target.value)}
      />
    </Box>
    </>
  )
}

export default App
