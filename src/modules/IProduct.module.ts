export interface IProduct {
    id: number;
    name: string
    price: number
    description: string
}


export interface IProductProps {
    product: IProduct
}

export interface IOrders {
    uID: number
    id: number;
    name: string
    price: number
    description: string
    address: string
    email: string
    postaCode: string
    deliveryDay:string
    deliveryTime:string
}

export interface procuctsContext {
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export interface IFormOrder {
    
    address: string,
    email: string
    postaCode: string
    deliveryTime:string
    deliveryDay:string
}

export interface IOrdersProps {
    name:string
    address: string
    uID:number
    price:number
    email: string
    postaCode: string
    deliveryTime:string
    deliveryDay:string
}

export interface IShowOrders {
    order:IOrdersProps
} 

export interface IOrdersContext {
    orders: IOrders[]
    addOrder: (id: string) => void;
    deleteOrder: (id: number) => void;
    totalPrice: number;
    formOrder: IFormOrder;
    setFormOrder: React.Dispatch<React.SetStateAction<IFormOrder>>;
    handleDay:(day:string) => void
    handleTime: (time: string) => void
    setOrders:React.Dispatch<React.SetStateAction<IOrders[]>>
}