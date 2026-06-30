import { useLogin } from "../hooks/useLogin";
import DashboardForm from "./DashboardForm";

function DashboardStyles() {
    const { token, isAuthountication } = useLogin();

    if (!token) return;

    return (
        <>
            {isAuthountication() && (
                <div className="flex min-h-screen max-[800px]:flex-col py-10 ">
                    {/* اطلاعات کاربر */}
                    <div className="w-[50%] max-w-md mx-auto rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg">
                        {/* Header */}
                        <div className="bg-indigo-600 py-4">
                            <h2 className="text-center text-xl font-bold text-white">
                                اطلاعات حساب کاربری
                            </h2>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            <div className="flex justify-between items-center border-b pb-3 mb-3">
                                <span className="text-gray-500 font-medium">نام کاربری</span>
                                <span className="font-semibold text-gray-800">
                                    {token.userName}
                                </span>
                            </div>

                            <div className="flex justify-between items-center border-b pb-3 mb-3">
                                <span className="text-gray-500 font-medium">آدرس</span>
                                <span className="font-semibold text-gray-800 text-right">
                                    {token.address}
                                </span>
                            </div>

                            <div className="flex justify-between items-center border-b pb-3 mb-3">
                                <span className="text-gray-500 font-medium">کد پستی</span>
                                <span className="font-semibold text-gray-800">
                                    {token.postaCode}
                                </span>
                            </div>

                            <div className="flex justify-between items-center border-b pb-3 mb-3">
                                <span className="text-gray-500 font-medium">ایمیل</span>
                                <span className="font-semibold text-gray-800">
                                    {token.email}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 font-medium">رمز عبور</span>
                                <span className="font-semibold text-gray-800">
                                        {token.password}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* فرم ویرایش */}
                    <DashboardForm />

                </div>
            )}
            {/* {orders.length > 0 && (
                orders.map((order) => (
                    <ShowOrders key={order.uID} order={order} />
                ))
            )} */}
        </>
    );
}

export default DashboardStyles;