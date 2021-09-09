import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default class App extends Component {
  pagesize=6
  apiKey="ae4ea899f19a4182bd644cb9e774b193";

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" ><News pagesize={this.pagesize} apiKey={this.apiKey} country="in" category="general" /></Route>
              <Route exact path="/business" key="business"><News pagesize={this.pagesize} apiKey={this.apiKey} country="in" category="business" /></Route>
              <Route exact path="/entertainment" key="entertainment"><News pagesize={this.pagesize} apiKey={this.apiKey} country="in" category="entertainment" /></Route>
              <Route exact path="/health" key="health"><News pagesize={this.pagesize} apiKey={this.apiKey} country="in" category="health" /></Route>
              <Route exact path="/science" key="science"><News pagesize={this.pagesize} apiKey={this.apiKey} country="in" category="science" /></Route>
              <Route exact path="/sports" key="sports"><News pagesize={this.pagesize} apiKey={this.apiKey} country="in" category="sports" /></Route>
              <Route exact path="/technology" key="technology"><News pagesize={this.pagesize} apiKey={this.apiKey} country="in" category="technology" /></Route>


            </Switch>

          </Router>
        </div>
      </>
    )
  }
}
