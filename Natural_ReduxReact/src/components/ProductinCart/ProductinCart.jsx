import React, { Component } from 'react';
import "./ProductinCart.css"
import { removeProductToCart } from '../../Store/Actions/Actions';


class ProductinCart extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="product-in-cart">
            <div className="product-img">
                <img className="prd-img" src={'/images/products/' + this.props.data.product.image}></img>
            </div>
            <div className="product-title">
                <h2>{this.props.data.product.title}</h2>
            </div>
            <div className="product-price">
                <h3>${(this.props.data.product.price).toFixed(2)}</h3>
                <h4>${(this.props.data.product.price * this.props.data.quantity).toFixed(2) }</h4>
            </div>
            <div className="product-btn">
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
         );
    }
}
 
export default ProductinCart;