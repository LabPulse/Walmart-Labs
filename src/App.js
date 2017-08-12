import React, { Component } from 'react';
import Manager from './Manager.js';
import ItemPage from './ItemPage.js';
import $ from 'jquery';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
      constructor(props){
        super(props)
        this.searchItem = this.searchItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            item: "",
            message: "",
            user: ""

        }
    }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  

  searchItem(e){
    e.preventDefault();
    console.log('in here')
    let base = 'http://api.walmartlabs.com/v1/search?';
    let q = `query=${this.state.item}`;
    let idAndKey = `&format=json&apiKey=87yvbnabvmy6mpw6sjttf5th`;
    let url = base + q + idAndKey;
        axios.get(url)
            .then(function (response) {
                console.log(response);
    
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
  render() {
    console.log(this.state.item)
    let events = [
      {
        start: '2017-08-12',
        end: '2017-08-16',
        rendering: 'background',
        color: '#00FF00 '
      },
    ]

    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                (<div>
                  <h1>DEFAULT ROUTE</h1>
                  <ItemPage item={this.state.item} searchItem={this.searchItem} handleChange={this.handleChange} />
                </div>)
              )}
            />
            <Route
              exact
              path="/manage"
              render={() => (
                (<div>
                  <h1>MANAGE ROUTE</h1>
                  <Manager />
                </div>)
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;