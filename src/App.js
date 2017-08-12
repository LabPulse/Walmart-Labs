import React, { Component } from 'react';
import Manager from './Manager.js';
import ItemPage from './ItemPage.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
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
                  <ItemPage />
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