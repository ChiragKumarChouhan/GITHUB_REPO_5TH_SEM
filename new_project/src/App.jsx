import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Router>
          <Route path='/' element={<itemStore/>}
                    <Route path='/mycart' element={<itemStore/>}
          <Route path='/' element={<itemStore/>}
          <Route path='/' element={<itemStore/>}

        </Router>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
