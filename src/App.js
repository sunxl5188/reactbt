import React, { Component } from 'react'

import './App.css'
import PaginAction from "./PaginAction"

class App extends Component {
  render () {
    return (
      <div className="container">
        <PaginAction total={100} display={10} current={30}/>
      </div>
    )
  }
}

export default App
