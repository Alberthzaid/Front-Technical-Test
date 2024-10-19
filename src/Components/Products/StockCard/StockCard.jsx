import React from 'react'
import './ProductCard.css'
import {ButtonCart} from "../../Buttons/ButtonCart/ButtonCart.jsx";

export const ProductCard = ({product}) => {
    return (
        <div className="StockCard">
            {/* <div className="ProductImage-Content">
                <img className="ProductImage" src={product.image}/>
            </div> */}
            <div className="notification">
            <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">
                    <h4 className="notititle-title">{product_name}</h4>
                </div>
                <div className="notibody">
                    <p>{product.id} $</p>
                    <p>{product.product_name} $</p>
                    <p>{product.stock_cuantity} $</p>
                </div>
            </div>
        </div>
    )
}
