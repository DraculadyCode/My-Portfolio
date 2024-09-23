import { useState } from 'react'
import './App.css'
import Logout from './components/Logout'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null)

  return (
    <main>
      <h1>Welcome to <span>[Application]</span></h1>
      {user ? <Logout setUser={setUser} /> : <Login setUser={setUser} /> }
    </main>
  )
}

export default App
