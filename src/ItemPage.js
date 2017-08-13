import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemPage extends Component {

    render() {
        if(this.props.alreadySubscribed == false) {
            return (
                <div className="container">
                    <div className="row text-center">
                        <h1 className="col-6" style={{padding: "30px", height: "100px"}}> Welcome to Walmart </h1>
                        <div classID="Menu" className="col-12" style={{height: "30px"}}>
                            <button><Link id="manageLink" to="/">Home</Link></button>
                            <button><Link id="manageLink" to="/manage">Manage</Link></button>
                        </div>
                        <div classID="ItemDetails" className="col-12 text-center"
                             style={{display: this.props.miniWindow}}>
                            <div className="col-6">
                                <img src={this.props.mediumImage}/>
                            </div>
                            <div className="col-6">
                                Description: <p dangerouslySetInnerHTML={{__html: this.props.longDescription}}></p>
                                <br/> Price: ${this.props.salePrice}
                            </div>
                        </div>
                        <form onSubmit={this.props.searchItem}>
                            What are you looking for <input name="item" placeholder="Tide" value={this.props.item}
                                                            onChange={this.props.handleChange}/>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className="row" style={{display: this.props.miniWindow}}>
                        <form onSubmit={this.props.saveItem}>
                            <input placeholder="quantity" name="quantity" value={this.props.quantity}
                                   onChange={this.props.handleChange}/>
                            <input placeholder="frequency" name="frequency" value={this.props.frequency}
                                   onChange={this.props.handleChange}/>
                            <input placeholder="shipping rate" name="shippingRate" value={this.props.shippingRate}
                                   onChange={this.props.handleChange}/>
                            <button>Save</button>
                        </form>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="container">
                    <div className="row text-center">
                        <h1 className="col-6"style={{padding: "30px", height: "100px"}}> Welcome to Walmart </h1>
                        <div classID="Menu" className="col-12" style={{height: "30px"}}>
                            <button><Link id="manageLink" to="/">Home</Link></button>
                            <button><Link id="manageLink" to="/manage">Manage</Link></button>
                        </div>
                        <div classID="ItemDetails" className="col-12 text-center"
                             style={{display: this.props.miniWindow}}>
                            <div className="col-6">
                                <img src={this.props.mediumImage}/>
                            </div>
                            <div className="col-6">
                                <p dangerouslySetInnerHTML={{__html: this.props.longDescription}}></p>
                            </div>
                        </div>
                        <form onSubmit={this.props.searchItem}>
                            What are you looking for <input name="item" placeholder="Tide" value={this.props.item}
                                                            onChange={this.props.handleChange}/>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className="row" style={{display: this.props.miniWindow}}>
                        <h1>You have already subscribed to this item.</h1>
                    </div>
                </div>
            );
        }
    }
}

module.exports = ItemPage;