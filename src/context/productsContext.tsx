import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IProduct, procuctsContext } from "../modules/IProduct.module";
import { getProducts } from "../services/data";

export const producsContext = createContext<null | procuctsContext>(null)

export default function ProductsProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = async () => {
        try {
            const res = await getProducts();
            if (res) {
                setProducts(res);
                console.log(res);
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    
    const contextValue: procuctsContext = {
        products,    
        setProducts
    }
    return (
        <producsContext.Provider value={contextValue}>
            {children}
        </producsContext.Provider>
    )
}