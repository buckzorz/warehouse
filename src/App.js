import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import PackageList from './components/PackageList'
import AddCargo from './components/AddCargo'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/addcargo" component={AddCargo}/>
          <Route exact path="/parcels" component={PackageList}/>>
          <Route path="/parcels/:id"/>
          <Route exact path="/handout" />
        </Switch>
      </div>
    )
  }
}

export default App;
