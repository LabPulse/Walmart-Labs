import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemPage extends Component {

    render() {

        return (
            <div>
                <h1> ITEM PAGE </h1>
                <button><Link id="manageLink" to="/manage">Manage</Link></button>
            </div>
        );
    }
}

module.exports = ItemPage;