import { createContext, useState, type ReactNode } from "react";
import { useProducts } from "../hooks/useProducts";
import type { IFormOrder, IOrders, IOrdersContext } from "../modules/IProduct.module";
import { toast } from "react-toastify";
import { useMemo } from "react";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

export const orderContext = createContext<IOrdersContext | null>(null);

export default function OrdersProvider({ children }: { children: ReactNode }) {
    const { token } = useLogin();
    const { products } = useProducts();
    const [orders, setOrders] = useState<IOrders[]>(() => {
        const savedOrder = localStorage.getItem("order");
        if (savedOrder) {
            return JSON.parse(savedOrder);
        }
        else {
            return [];
        }
    });

    useEffect(() => {
        setFormOrder({
            address: token.address,
            email: token.email,
            postaCode: token.postaCode,
            deliveryDay: "",
            deliveryTime: "",
        });
    }, [token]);

    const [formOrder, setFormOrder] = useState<IFormOrder>({
        address: "",
        email: "",
        postaCode: "",
        deliveryTime: "",
        deliveryDay: ""
    });

    const addOrder = (id: string) => {
        const product = products.find((item) => item.id.toString() === id);
        if (!product) return;
        if (!formOrder.address.trim() || !formOrder.email.trim() || !formOrder.postaCode.trim() || !formOrder.deliveryDay.trim() || !formOrder.deliveryTime.trim()) {
            toast.error("وارد کردن فیلد ها الزامی است");
            return;
        }
        else {
            const newEntry = {
                uID: Date.now(),
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                address: formOrder.address,
                email: formOrder.email,
                postaCode: formOrder.postaCode,
                deliveryDay: formOrder.deliveryDay,
                deliveryTime: formOrder.deliveryTime,
            }
            setOrders((prev) => {
                const order = [...prev, newEntry]
                localStorage.setItem("order", JSON.stringify(order));
                return order;
            })
            toast.success("سفارش شما با موفقیت ثبت شد");
            setFormOrder({ address: "", email: "", deliveryDay: "", deliveryTime: "", postaCode: "" });
        }
    }

    const totalPrice = useMemo(() => {
        if (orders.length > 0) {
            return orders.reduce((sum1, order) => sum1 + order.price, 0)
        }
        else {
            return 0;
        }
    }, [orders])

    const deleteOrder = (uID: number) => {
        setOrders((prev) => {
            const updatedOrder = prev.filter((order) => order.uID !== uID);
            localStorage.setItem("order", JSON.stringify(updatedOrder));
            return updatedOrder;
        })
        toast.success("محصول مورد نظر شما با موفقیت حذف شد");
    }

    const handleDay = (day: string) => {
        setFormOrder({
            ...formOrder,
            deliveryDay: day,
        })
    }

    const handleTime = (time: string) => {
        setFormOrder({ ...formOrder, deliveryTime: time })
    }
    const contextValue: IOrdersContext = {
        orders,
        addOrder,
        deleteOrder,
        totalPrice,
        formOrder,
        setFormOrder,
        handleDay,
        handleTime,
        setOrders
    }

    return (
        <orderContext.Provider value={contextValue}>
            {children}
        </orderContext.Provider>
    )
}