import { useLogin } from "../hooks/useLogin";
import { useOrders } from "../hooks/useOrders";
import type { IShowOrders } from "../modules/IProduct.module";

function ShowOrders({
  order
}: IShowOrders) {
  const { deleteOrder } = useOrders();
  const { displayUserName, isAuthountication } = useLogin();

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

      {/* Header */}
      <div className="bg-indigo-600 px-6 py-4">
        <h2 className="text-center text-2xl font-bold text-white">
          اطلاعات سفارش شما
        </h2>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-500 font-medium">نام</span>
          <span className="font-semibold text-gray-800">{order.name}</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-500 font-medium">قیمت</span>
          <span className="font-semibold text-green-600">
            {order.price.toLocaleString()} تومان
          </span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-500 font-medium">آدرس</span>
          <span className="font-semibold text-gray-800">{order.address}</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-500 font-medium">ایمیل</span>
          <span className="font-semibold text-gray-800">{order.email}</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-500 font-medium">کد پستی</span>
          <span className="font-semibold text-gray-800">{order.postaCode}</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-500 font-medium">روز ارسال</span>
          <span className="font-semibold text-gray-800">{order.deliveryDay}</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-gray-500 font-medium">زمان ارسال</span>
          <span className="font-semibold text-gray-800">{order.deliveryTime}</span>
        </div>

        {isAuthountication() && (
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-500 font-medium">ثبت شده توسط</span>
            <span className="font-semibold text-indigo-600">
              {displayUserName()}
            </span>
          </div>
        )}

        <button
          onClick={() => deleteOrder(order.uID)}
          className="w-full mt-6 rounded-xl bg-red-500 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-red-600"
        >
          حذف سفارش
        </button>
      </div>
    </div>
  );
}

export default ShowOrders;