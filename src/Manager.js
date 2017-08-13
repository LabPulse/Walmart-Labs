import React, { Component } from 'react';
import Calendar from './CalendarManager.js';
import List from './ListManager.js';

class Manager extends Component {

    render() {
        const subs = [
            {
                start: '2017-08-10',
                title: 'Tide',
                frequency: 5
            },
            {
                start: '2017-08-11',
                title: 'Crest',
                frequency: 7
            },
            {
                start: '2017-08-12',
                title: 'Dove',
                frequency: 12
            },
            {
                start: '2017-08-13',
                title: 'Bounty',
                frequency: 15
            },
        ]
        const events = [];

        for (let index = 0; index < subs.length; index++) {
            for (let jndex = 0; jndex < 5; jndex++) {
                let date = new Date(subs[index].start);
                if (jndex === 0) {
                    events.push(subs[index]);
                }
                else {
                    let clone = JSON.parse(JSON.stringify(subs[index]));
                    date.setDate(date.getDate() + subs[index].frequency * jndex + 1);
                    clone.start = date;
                    events.push(clone);
                }
            }
        }
        alert(JSON.stringify(events))
        return (

            <div>
                <List events={events} />
                <Calendar events={events} />
            </div>
        );
    }
}

module.exports = Manager;
