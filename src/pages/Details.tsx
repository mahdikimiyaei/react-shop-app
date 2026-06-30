import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useOrders } from "../hooks/useOrders";
import FormOrders from "../Components/FormOrders";
import DeliveryTimes from "../Components/DeliveryTimes";

export default function Details() {
    const { id } = useParams();
    if (!id) return;

    const { products } = useProducts();
    const product = products.find((item) => item.id.toString() === id);

    const { addOrder, formOrder } = useOrders();
    const navigate = useNavigate();

    const handleAddOrder = () => {
        addOrder(id);
        if (
            formOrder.address &&
            formOrder.postaCode &&
            formOrder.email &&
            formOrder.deliveryDay &&
            formOrder.deliveryTime
        ) {
           navigate("/orders")
        }
    };

    return (
        <>
            {!product ? (
                <p className="text-center text-2xl text-blue-600 font-semibold mt-20 animate-pulse">
                    در حال بارگذاری...
                </p>
            ) : (
                <>
                    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">

                        <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-8 py-6">
                            <h2 className="text-3xl font-bold">
                                جزئیات محصول
                            </h2>
                            <p className="opacity-90 mt-1">
                                شناسه محصول: {product.id}
                            </p>
                        </div>

                        <div className="p-8 space-y-6">

                            <div className="flex justify-between items-center bg-blue-50 rounded-2xl p-5">
                                <span className="font-semibold text-gray-600">
                                    نام محصول
                                </span>

                                <span className="text-xl font-bold text-blue-700">
                                    {product.name}
                                </span>
                            </div>

                            <div className="flex justify-between items-center bg-green-50 rounded-2xl p-5">
                                <span className="font-semibold text-gray-600">
                                    قیمت
                                </span>

                                <span className="text-2xl font-bold text-green-600">
                                    {product.price}
                                </span>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-blue-700 mb-3">
                                    توضیحات محصول
                                </h3>

                                <p className="text-gray-600 leading-8">
                                    {product.description}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="w-[50%] m-auto">
                        <FormOrders handleAddOrder={handleAddOrder}/>
                    </div>

                    

                    <DeliveryTimes />
                </>
            )}
        </>
    );
}