import axios from "axios";


const url = "backend route"

export async function fetchProducts() {
    return await axios.get(`${url}getProducts/`)
}