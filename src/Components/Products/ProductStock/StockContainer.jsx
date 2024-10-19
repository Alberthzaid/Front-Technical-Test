import React, {useEffect, useState} from 'react'
import './ProductContainer.css'
import{ProductCard} from "../ProductCard/ProductCard.jsx";
import {getProduct} from "../../../Helpers/ApiConfig/Controllers/ControllersFetch.js";
import {Loader} from "../../Loader/Loader.jsx";


export const StockContainer = ({api}) => {

    const [ products , setProducts ] = useState([])
    const [loading , setLoading] = useState(true)

    setProducts([{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"}])

    useEffect(() => {
        const getProductList = async ()=>{
            try{
                // const data = await getProduct(api)
                // setProducts(data);
                setLoading(false)

            }catch (error){
                throw error;
            }
        }
        getProductList()}, []);

    if(loading){
        return <Loader/>
    }

    return (
        <>
            <div className="titleProducts">
                <h2 className="titleProducts-title">
                    Stock
                </h2>
            </div>

            <div className="Container_Products">
                {products.map((product => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                )))}
            </div>
        </>


    )
}
