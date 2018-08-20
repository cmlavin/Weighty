import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Homepage from './Homepage'
import Summary from './Summary'
import Logbook from './Logbook'
import Reports from './Reports'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Homepage />
            <Summary />
            <Logbook />
            <Reports />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
