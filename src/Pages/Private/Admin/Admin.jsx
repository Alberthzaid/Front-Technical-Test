// eslint-disable-next-line no-unused-vars
import React from 'react'
import {StockContainer} from "../../../Components/Products/ProductStock/StockContainer.jsx";
import {fetchProducts} from "../../../Helpers/ApiConfig/Controllers/ProductStock.js";
import {API_GET_PRODUCTS} from "../../../Helpers/ApiConfig/Controllers/Apis.js";

// const api = `${fetchProducts}`
const api = `${fetchProducts}?limit=7`
export const Admin = () => {
    return (
        <div>    
            <section className="ProductsAdminContent">
                <StockContainer api={api}/>
            </section> 

        </div>
    )
}