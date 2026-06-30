import axios from "axios"
import type { IProduct } from "../modules/IProduct.module";

export const getProducts = async () => {
    try {
        const res = await axios.get("http://localhost:5000/products");
        if (res.data) {
            return res.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const addProduct = async (data: IProduct) => {
    try {
    await axios.post("http://localhost:5000/products", data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}