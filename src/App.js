import React, { Component } from 'react';
import Manager from './Manager.js';
import ItemPage from './ItemPage.js';
import $ from 'jquery';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
      constructor(props){
        super(props)
        this.searchItem = this.searchItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            item: "",
            user: "",
            name: "",
            itemId: "",
            mediumImage: "",
            msrp: "",
            salePrice: "" ,
            categoryPath:"" ,
            standardShipRate: "" ,
            upc: "",
            isTwoDayShippingEligible: "",
            miniWindow: "none",
            quantity: "",
            frequency: "",
            shippingRate: ""
        }
    }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }  

  searchItem(e){
    e.preventDefault();
    console.log('in here')
    let base = 'http://api.walmartlabs.com/v1/search?';
    let q = `query=${this.state.item}`;
    let idAndKey = `&format=json&apiKey=87yvbnabvmy6mpw6sjttf5th`;
    let url = base + q + idAndKey;
    
        axios.get(url)
            .then((response) => {
              console.log(response)
              this.setState({ 
              name: response.data.items[0].name,
              itemId: response.data.items[0].itemId,
              msrp: response.data.items[0].msrp,
              salePrice: response.data.items[0].salePrice ,
              categoryPath:response.data.items[0].categoryPath,
              standardShipRate:response.data.items[0].standardShipRate ,
              upc: response.data.items[0].upc,
              isTwoDayShippingEligible:response.data.items[0].isTwoDayShippingEligible,
              miniWindow: "block",
             })
    
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  saveItem(e){
    e.preventDefault();
    console.log('in saveItem function')
    axios.post('/', {name: this.state.name,
              itemId: this.state.itemId,
              msrp: this.state.msrp,
              salePrice: this.state.salePrice ,
              categoryPath:this.state.categoryPath,
              standardShipRate:this.state.standardShipRate ,
              upc: this.state.upc,
              isTwoDayShippingEligible: this.state.isTwoDayShippingEligible,
              frequency: this.state.frequency,
              quantity: this.state.quantity,
              shippingRate: this.state.shippingRate,
    })
    .then((response) => {
    console.log('successful save', response)
    })

  }
    
  render() {
    console.log(this.state.name)
    let events = [
      {
        start: '2017-08-10',
        end: '2017-08-16',
        rendering: 'background',
        color: '#00FF00'
      },
    ]

    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                (<div>
                  <h1>DEFAULT ROUTE</h1>
                  <ItemPage saveItem={this.saveItem} quantity={this.state.quantity} frequency={this.state.frequency} shippingRate={this.state.shippingRate} user={this.state.user} miniWindow={this.state.miniWindow} item={this.state.item} searchItem={this.searchItem} handleChange={this.handleChange} />
                </div>)
              )}
            />
            <Route
              exact
              path="/manage"
              render={() => (
                (<div>
                  <h1>MANAGE ROUTE</h1>
                  <Manager />
                </div>)
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;