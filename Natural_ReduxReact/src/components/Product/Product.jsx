import React, { Component } from 'react';
import { connect } from 'react-redux';
import QtyPicker from '../qtyPicker/qtyPicker';
import "./Product.css"; 
import { increaseCounter, addProductToCart } from '../../Store/Actions/Actions';

class  Product extends Component {
    state = {
      quantity: 1,
    }

    // image/products/image-14.jpg
    render() {
        return ( 
           <div className="product">
               <img src={"/images/products/" + this.props.data.image} alt=""/>
                
              <h6>{this.props.data.title}</h6>
            

                <div className="total-price">
                <label className="value">${this.getTotal()}</label>
                <label className="price">${this.props.data.price.toFixed(2)}</label>
                </div>

               <div className="qty">
               <QtyPicker onValueChange={(qnty) => this.handleQuantityChange(qnty)}></QtyPicker>
                <button onClick={this.addToCart} className="btn btn-sm btn-primary btn-add">Add</button>
                </div>



           </div>
         );
    }

    addToCart = () => {
      console.log("Added to cart");
      this.props.increaseCounter();

      var addedProduct ={
        product: this.props.data,
        quantity: this.state.quantity,
      }

      this.props.addProductToCart(addedProduct);
    };

    getTotal = () => {
      return (this.props.data.price * this.state.quantity).toFixed(2);
    };

    handleQuantityChange = (qnty) => {
      this.setState({quantity: qnty});
    };
}
 
// 2 params for connect
// 1st: fn that maps the props to read from the store
// 2nd: a list(obj) of actions you want to dispatch
export default connect (null, { increaseCounter, addProductToCart }) (Product);