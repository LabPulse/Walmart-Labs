import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemPage extends Component {

    render() {

        return (
            <div>
                    <h1> ITEM PAGE </h1>
                    <form onSubmit={this.props.searchItem}>
                    <button><Link id="manageLink" to="/manage">Manage</Link></button>
                    <input name="item" value={this.props.item} onChange={this.props.handleChange}/>
                    <button>Submit</button>
                    </form>
            </div>
        );
    }
}

module.exports = ItemPage;