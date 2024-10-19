// eslint-disable-next-line no-unused-vars
import React from 'react'
import {StockContainer} from "../../../Components/Products/ProductStock/StockContainer.jsx";
import {fetchProducts} from "../../../Helpers/ApiConfig/Controllers/ProductStock.js";

const api = `${fetchProducts}`

export const Admin = () => {
    return (
        <div>

            <section className="ProductsAdminContent">
                <StockContainer api={api}/>
            </section>

        </div>
    )
}