import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidenav from './Components/Sidenav'
import Contact from './Components/Contact'
import Error from './Components/Error'
import Home from './Pages/Home'
import Works from './Pages/Works'
import Perspectives from './Pages/Perspectives'
import Musings from './Pages/Musings'
import About from './Pages/About'

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidenav/>
      <Contact />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/works" component={Works}/>
        <Route path="/perspectives" component={Perspectives}/>
        <Route path="/musings" component={Musings}/>
        <Route path="/about" component={About}/>
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
  )
}

export default App
