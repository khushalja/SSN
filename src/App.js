import React, { Component } from 'react';
import './App.css'
import About from './Components/About/about'
import Events from './Components/Events/events'
import Home from './Components/Home/home'
import Wellwishers from './Components/WellWishers/partner'
import Docs from './Components/Docs/docs'
import Footer from './Components/App-Footer/footer'
import Header from './Components/App-Header/header'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div className='Amain'>
        <div className='Apphead'><Header/></div>
        <div className='Appbody'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Events' element={<Events />} />
            <Route exact path='/WellWishers' element={<Wellwishers />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Docs' element={<Docs />} />
          </Routes>
        </Router>
        </div>
        <div className='Appfoot'><Footer /></div>
      </div>
    )
  }
}
