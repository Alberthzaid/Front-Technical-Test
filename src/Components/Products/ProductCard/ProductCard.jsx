import React from 'react'
import './ProductCard.css'
import {ButtonCart} from "../../Buttons/ButtonCart/ButtonCart.jsx";

export const ProductCard = ({product}) => {
    return (
        <div className="ProductConten">
            <div className="ProductImage-Content">
                <img className="ProductImage" src={product.image}/>
            </div>
            <div className="notification">
            <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">
                    <h4 className="notititle-title">{product.title}</h4>
                </div>
                <div className="notibody">
                    <h5>{product.category}</h5>
                    <p>{product.price} $</p>
                </div>
            </div>
            <ButtonCart product={product}/>
        </div>
    )
}
