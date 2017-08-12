import React, { Component } from 'react';

import $ from 'jquery';
import 'moment/min/moment.min.js';
import axios from 'axios';

import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import Items from './items.js';

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

    searchItem($item){
        axios.get('http://api.walmartlabs.com/v1/search?query='+ $item +'&format=json&apiKey=87yvbnabvmy6mpw6sjttf5th')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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

   return (
     <div className="App">
       <h1>IN APP.JS</h1>
       <Calendar events={events} />
        <Items />
     </div>
   );
 }
}

export default App;