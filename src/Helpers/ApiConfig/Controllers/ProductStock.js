import axios from "axios";

export const fetchProducts = "https://backend-makers.onrender.com/api/v1/get/product";

export const getProduct = async (fetchProducts)=>{
    try{
        const request = await  fetch(fetchProducts);
        const response = await request.json();
        console.log(response)
        return response;
    }catch(error){
        throw error
    }

}