import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props){
        super(props);
        this.key = this.props.key;
    }

    render() {
        return (
            <div>
                <h1> LIST ITEM </h1>
                { this.key }
            </div>
        );
    }
}

module.exports = ListItem;