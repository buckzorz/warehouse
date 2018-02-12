import React, { Component } from 'react';
import './App.css';
import WarehouseAddType from './components/WarehouseAddType'
import NavigationBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import BulkAdd from './components/BulkAdd'
import PackageList from './components/PackageList'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/addpallet"/>
          <Route exact path="/addparcel"/>
          <Route exact path="/parcels" component={PackageList}/>>
          <Route path="/parcels/:id"/>
          <Route exact path="/handout" />
        </Switch>
      </div>
    )
  }
}

export default App;
