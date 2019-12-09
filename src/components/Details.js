import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value  => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    console.log(id);
                    return (
                        <div className="container py-5">
                            
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid"/>
                                </div>
                                {/* product info */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title} </h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by :
                                        <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Some info about the product</p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>

                                        <ButtonContainer
                                        disabled={inCart}
                                        onClick={()=> {
                                            value.addToCart(id);
                                            value.openModel(id);
                                            }}
                                        cart
                                        >
                                            {inCart ? "In Cart" : "Add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                    }
                }
            </ProductConsumer>
        )
    }
}
