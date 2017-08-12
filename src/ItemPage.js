import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import user from './App.js'

class ItemPage extends Component {

    constructor(props)
    {
        super(props)
    }

    render() {

        return (
            
            <div>
            <div>
                <h1 className="userName"> Welcome, {this.props.user}!</h1>
                <button className="manageButton"><Link id="manageLink" to="/manage">Manage</Link></button>
                <h1 className="title"> WALMART ITEM SUBSCRIPTIONS </h1>
                <form onSubmit={this.props.searchItem}>
                <input className="item" value={this.props.item} onChange={this.props.handleChange}/>
                <button className="submitButton" >Submit</button> </form>
             </div>

            <div style={{display: this.props.miniWindow}}>
                <form onSubmit={this.props.saveItem}>
                <input placeholder="quantity" name="quantity" value={this.props.quantity} onChange={this.props.handleChange}/>
                <input placeholder="frequency" name="frequency" value={this.props.frequency} onChange={this.props.handleChange}/>
                <input placeholder="shipping rate" name="shippingRate" value={this.props.shippingRate} onChange={this.props.handleChange}/>
                <button>Save</button>
                </form>
            </div>
            </div>
        );
    }
}

module.exports = ItemPage;
