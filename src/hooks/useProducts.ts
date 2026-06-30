import { useContext } from "react";
import { producsContext } from "../context/productsContext";
import type { procuctsContext } from "../modules/IProduct.module";


export const useProducts = ():procuctsContext  => {
    const ContextProducts = useContext(producsContext);
    if (!ContextProducts) {
        throw new Error("contextProductError");
    }
    return ContextProducts;
}