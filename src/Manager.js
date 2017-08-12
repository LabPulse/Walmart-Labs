import React, { Component } from 'react';
import Calendar from './CalendarManager.js';
import List from './ListManager.js';

class Manager extends Component {

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
            <div>
                <List />
                <Calendar events={events} />
            </div>
        );
    }
}

module.exports = Manager;
