import React, { Component } from 'react';
import Calendar from './Calendar.js'
import Item from './Item.js'
import List from './List.js'
import axios from 'axios';
import $ from 'jquery';
import 'moment/min/moment.min.js';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      0: true,
      1: false,
    }
  }

  handleLoginSubmit() {
    this.setState({ 0: false, 1: true })
  }

 render() {

   let events = [
     {
       start: '2017-01-06',
       end: '2017-01-08',
       rendering: 'background',
       color: '#00FF00 '
     },
   ]
  if (this.state[0] === true) {
      return (
        <div>
          <Calendar events={events} />
        </div>
      )
  }
  if (this.state[1] === true) {
      return (
        <div>
          <Item />>
        </div>
      )
  }
  }
}

export default App;