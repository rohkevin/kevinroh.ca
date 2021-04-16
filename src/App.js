import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './theme.scss'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error'
import Home from './Pages/Home/Home'
import Works from './Pages/Works/Works'
import Perspectives from './Pages/Perspectives/Perspectives'
import Musings from './Pages/Musings/Musings'
import About from './Pages/About/About'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/works" component={Works}/>
          <Route path="/perspectives" component={Perspectives}/>
          <Route path="/musings" component={Musings}/>
          <Route path="/about" component={About}/>
          <Route path="*" component={Error}/>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
