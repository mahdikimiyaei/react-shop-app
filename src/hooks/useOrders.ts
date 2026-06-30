import { useContext } from "react"
import { orderContext } from "../context/ordersContext"
import type { IOrdersContext } from "../modules/IProduct.module";

export const useOrders = ():IOrdersContext  => {
    const ContextOrders = useContext(orderContext);
    if (!ContextOrders) {
        throw new Error("contextOrdersError");
    }
    return ContextOrders;
}