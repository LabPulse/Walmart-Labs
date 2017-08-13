import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props){
        super(props);
        this.key = this.props.key;
    }

    render() {
        return (
            <div>
                Tide
                { this.key }
            </div>
        );
    }
}

module.exports = ListItem;