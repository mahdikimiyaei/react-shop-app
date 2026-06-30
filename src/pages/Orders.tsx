import { useOrders } from "../hooks/useOrders";
import ShowOrders from "../Components/ShowOrders";

function Orders() {
  const { orders, totalPrice } = useOrders();
  return (
    <>
      {totalPrice > 0 && (
        <div className="bg-red-500 rounded-xl py-3 w-45 text-xl m-auto mt-5 font-bold text-center text-white">
          <p>قیمت کل: {totalPrice.toString()}</p>
        </div>
      )}
      {orders.length > 0 ? (
        orders.map((order) => (
          <ShowOrders key={order.uID} order={order} />
        ))
      ) : (
        <p className="text-center font-bold text-3xl pt-90 pb-50">سفارشی وجود ندارد</p>
      )}

    </>
  )
}

export default Orders
