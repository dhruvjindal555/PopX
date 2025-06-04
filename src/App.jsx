import { BrowserRouter as Router, Routes, Route } from "react-router"
import WelcomeScreen from './components/WelcomeScreen'
import LoginScreen from "./components/LoginScreen"
import AccountSettings from "./components/AccountSettings"
import SignupScreen from "./components/SignupScreen"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/account' element={<AccountSettings />} />
          <Route path='/signup' element={<SignupScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
