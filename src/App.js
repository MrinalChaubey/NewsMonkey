import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News';
import Newsitem from './Components/Newsitem';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* Remove this line below: it renders News always */}
          {/* <News pageSize={5} country="us" category="Sports" /> */}

 
   {/* 
    'exact' ensures that the route only matches when the path is exactly '/'
    Without 'exact', '/business' or other paths starting with '/' would also match this route.
  */}

 {/* 
    'key' is used to forcefully remount the News component when the route changes.
    This is important because React may reuse the same component instance for performance, 
    and without a unique 'key', it might not re-fetch new data for the new category.
  */}
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={8} country="us" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={8} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" pageSize={8} country="us" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={8} country="us" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={8} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={8} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
// see here we gave unique keys so  that content changes when  clicked on the type 
// exact is resp