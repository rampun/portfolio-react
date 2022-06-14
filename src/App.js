import React from 'react'
import Layout from './components/Layout/Layout'
import WorkTile from './components/WorkTile/WorkTile'

import HomeController from './screens/home/home-controller'
import WorksController from './screens/works/works-controller'
import WorkController from './screens/work/work-controller'
import AboutController from './screens/about/about-controller'
import Error from './screens/error'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeController />} />
        <Route path="/works" element={<WorksController />} />
        <Route path="/work/:slug" element={<WorkController />} />
        <Route path="/about" element={<AboutController />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </>
}

export default App