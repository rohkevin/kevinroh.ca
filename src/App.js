import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import Layout from './Components/Layout/Layout'
import Error from './Components/Error'
import Home from './Pages/Home'
import Works from './Pages/Works'
import Perspectives from './Pages/Perspectives'
import Musings from './Pages/Musings'
import About from './Pages/About'
import './global.scss';

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
