import React, { Component } from 'react';
import './App.css';
import WarehouseAddType from './components/WarehouseAddType'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import BulkAdd from './components/BulkAdd'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={WarehouseAddType} />
          <Route path path='/bulkadd' component={BulkAdd}/>
        </Switch>
      </div>
    )
  }
}

export default App;
