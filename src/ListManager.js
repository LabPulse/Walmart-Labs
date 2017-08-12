import React, { Component } from 'react';

import ListItem from './ListItem.js';

class List extends Component {

    constructor(props){
        super(props);
        this.events = this.props.events;
    }

    render() {
        const arr = {};
        for(let index = 0; index < this.events.length; index++) {
            if (!arr[this.events[index].title]) arr[this.events[index].title] = 0;
        }
        const list = [];

        for (let index = 0; index < Object.keys(arr).length; index++) {
            list.push(<ListItem key={index}/>)
        }

        return (
            <div>
                <h1> LIST </h1>
                { list }
            </div>
        );
    }
}

module.exports = List;