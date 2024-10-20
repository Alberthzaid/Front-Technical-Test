import React, { useEffect, useState } from "react";
import "./StockContainer.css";
import { StockCard } from "../StockCard/StockCard.jsx";
import { getProduct } from "../../../Helpers/ApiConfig/Controllers/ProductStock.js";
import { Loader } from "../../Loader/Loader.jsx";
import { Chart } from "react-google-charts";

export const StockContainer = ({ api }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  var result = [["Product", "Stock Percentage"]];
  const options = {
    title: "Inventory Percentages",
  };
  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getProduct(api);
        // console.log(data.data);
        setProducts(data.data);
        // var json_data = {"2013-01-21":1,"2013-01-22":7};
        for (var i in data.data) result.push([data.data[i].product_name, data.data[i].stock_quantity]);
        for (var i=0;i<7;i++) result.pop;
        console.log(result)
        console.log(data1)
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    getProductList();
  }, []);

  const data1 = [
    ["Product", "Stock Percentage"],
    ["Galaxy S23", 150],
    ["Dell XPS 13", 70],
    ["Sony WH-1000XM5", 200],
    ["iPhone 15", 98],
    ["MacBook Pro", 49],
    ["Televisor", 20],
    ["iPhone 14", 50],
  ];
  
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
                <td>{data.stock_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="Container_Products">
          <div className="Container_Chart">
            <Chart
              chartType="PieChart"
              data={data1.slice(0,7)}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
