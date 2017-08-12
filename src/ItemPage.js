import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemPage extends Component {

    render() {

        return (
            <div>
                <div>
                    <h1> ITEM PAGE </h1>
                    <form onSubmit={this.props.searchItem}>
                    <button><Link id="manageLink" to="/manage">Manage</Link></button>
                    <input name="item" value={this.props.item} onChange={this.props.handleChange}/>
                    <button>Submit</button>
                    </form>     
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