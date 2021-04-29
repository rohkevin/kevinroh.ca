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
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop/>
      <Layout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home}/>
          <Route exact path={process.env.PUBLIC_URL + "/works"} component={Works}/>
          <Route path={process.env.PUBLIC_URL + "/works/:projectName"} children={<ProjectPage/>}/>
          <Route path={process.env.PUBLIC_URL + "/perspectives"} component={Perspectives}/>
          <Route path={process.env.PUBLIC_URL + "/musings"} component={Musings}/>
          <Route path={process.env.PUBLIC_URL + "/about"} component={About}/>
          <Route path={process.env.PUBLIC_URL + "*"} component={Error}/>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
