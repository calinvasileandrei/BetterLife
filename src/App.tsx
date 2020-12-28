import React from 'react'
import './App.css'
import UserHomePage from './pages/UserHomePage/UserHomePage'
import SigninPage from './pages/SigninPage/SigninPage'
import { IndexPage } from './pages/LandingPage/IndexPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './firebase/Auth'
import { PrivateRoute } from './routes/PrivateRoute'
import SignupPage from './pages/SignupPage/SignupPage'
import { ProfileSettingPage } from './pages/ProfileSettingPage/ProfileSettingPage'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path='/' component={IndexPage} />
          <PrivateRoute exact path='/userhome' component={UserHomePage} />
          <Route exact path='/signin' component={SigninPage} />
          <Route exact path='/signup' component={SignupPage} />
          <PrivateRoute
            exact
            path='/profilesetting'
            component={ProfileSettingPage}
          />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
