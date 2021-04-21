import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'

import './theme.scss'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error'
import Home from './Pages/Home/Home'
import Works from './Pages/Works/Works'
import Perspectives from './Pages/Perspectives/Perspectives'
import Musings from './Pages/Musings/Musings'
import About from './Pages/About/About'
import ProjectPage from './Pages/ProjectPage/ProjectPage'

function ScrollToTop(){
  const { pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);  
  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/works" component={Works}/>
          <Route exact path="/works/:projectName" component={ProjectPage}/>
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
