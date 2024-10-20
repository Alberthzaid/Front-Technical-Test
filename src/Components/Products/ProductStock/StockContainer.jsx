import React, { useEffect, useState } from "react";
import "./StockContainer.css";
import { StockCard } from "../StockCard/StockCard.jsx";
import { getProduct } from "../../../Helpers/ApiConfig/Controllers/ProductStock.js";
import { Loader } from "../../Loader/Loader.jsx";

export const StockContainer = ({ api }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // setProducts([{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"},{"id":111,"product_name":"product 1","stock_cuantity":"gold"}])

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getProduct(api);
        console.log(data);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    getProductList();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="titleProducts">
        <h2 className="titleProducts-title">Inventory</h2>
      </div>

      <div className="Container_Products">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
              {products.map((data, i) => (
                <tr key={i} className="active-row">
                  <td>{data.id}</td>
                  <td>{data.product_name}</td>
                  <td>{data.stock_cuantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
