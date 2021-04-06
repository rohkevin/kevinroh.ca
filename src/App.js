import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidenav from './Components/Sidenav'
import Error from './Components/Error'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidenav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
  )
}

export default App
