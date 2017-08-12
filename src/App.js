import React, { Component } from 'react';

import $ from 'jquery';
import 'moment/min/moment.min.js';

import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';


class Calendar extends Component {

 componentDidMount(){
   const { calendar } = this.refs;

   $(calendar).fullCalendar({events: this.props.events});
 }

 render() {
   return (
     <div ref='calendar'></div>
   );
 }

}


class App extends Component {
 render() {

   let events = [
     {
       start: '2017-01-06',
       end: '2017-01-08',
       rendering: 'background',
       color: '#00FF00 '
     },
   ]

   return (
     <div className="App">
       <Calendar events={events} />
     </div>
   );
 }
}

export default App;