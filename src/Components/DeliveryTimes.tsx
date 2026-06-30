import { useOrders } from "../hooks/useOrders";
import { useTheme } from "../hooks/useTheme";

export default function DeliveryTimes() {
    const { handleDay, handleTime, formOrder } = useOrders();
    const { theme } = useTheme();
    const weekDays = [
        "یکشنبه",
        "دوشنبه",
        "سه‌شنبه",
        "چهارشنبه",
        "پنجشنبه",
        "جمعه",
        "شنبه",
    ];

    const getDeliveryInfo = (days: number) => {
        const date = new Date();
        date.setDate(date.getDate() + days);

        return {
            day: weekDays[date.getDay()],
            date: date.toLocaleDateString("fa-IR"),
        };
    };

    const first = getDeliveryInfo(3);
    const second = getDeliveryInfo(4);
    const third = getDeliveryInfo(5);
    const fourth = getDeliveryInfo(6);
    const fifth = getDeliveryInfo(7);
    const sixth = getDeliveryInfo(8);
    const seventh = getDeliveryInfo(9);


    return (
        <div
            className={`${theme === "dark"
                ? "bg-gray-900 text-white border-gray-700"
                : "bg-white"
                } mt-8 rounded-3xl p-8 shadow-xl border border-blue-100 transition-all duration-300 hover:shadow-blue-200`}
        >
            <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                انتخاب زمان تحویل
            </h2>

            {/* روزها */}

            <div
                className={`flex gap-3 mb-8 flex-wrap justify-center ${theme === "dark" && "text-black"
                    }`}
            >
                <button
                    onClick={() => handleDay(first.day + first.date)}
                    className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1
        ${formOrder.deliveryDay === first.day + first.date
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-blue-50 border border-blue-100 hover:bg-blue-100"
                        }`}
                >
                    <div>{first.day}</div>
                    <div className="text-xs opacity-80">{first.date}</div>
                </button>

                <button
                    onClick={() => handleDay(second.day + second.date)}
                    className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1
        ${formOrder.deliveryDay === second.day + second.date
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-blue-50 border border-blue-100 hover:bg-blue-100"
                        }`}
                >
                    <div>{second.day}</div>
                    <div className="text-xs opacity-80">{second.date}</div>
                </button>

                <button
                    onClick={() => handleDay(third.day + third.date)}
                    className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1
        ${formOrder.deliveryDay === third.day + third.date
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-blue-50 border border-blue-100 hover:bg-blue-100"
                        }`}
                >
                    <div>{third.day}</div>
                    <div className="text-xs opacity-80">{third.date}</div>
                </button>

                <button
                    onClick={() => handleDay(fourth.day + fourth.date)}
                    className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1
        ${formOrder.deliveryDay === fourth.day + fourth.date
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-blue-50 border border-blue-100 hover:bg-blue-100"
                        }`}
                >
                    <div>{fourth.day}</div>
                    <div className="text-xs opacity-80">{fourth.date}</div>
                </button>

                <button
                    onClick={() => handleDay(fifth.day + fifth.date)}
                    className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1
        ${formOrder.deliveryDay === fifth.day + fifth.date
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-blue-50 border border-blue-100 hover:bg-blue-100"
                        }`}
                >
                    <div>{fifth.day}</div>
                    <div className="text-xs opacity-80">{fifth.date}</div>
                </button>

                <button
                    onClick={() => handleDay(sixth.day + sixth.date)}
                    className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1
    ${formOrder.deliveryDay === sixth.day + sixth.date
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-blue-50 border border-blue-100 hover:bg-blue-100"
                        }`}
                >
                    <div>{sixth.day}</div>
                    <div className="text-xs opacity-80">{sixth.date}</div>
                </button>

                <button
                    onClick={() => handleDay(seventh.day + seventh.date)}
                    className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 active:scale-95 hover:-translate-y-1
    ${formOrder.deliveryDay === seventh.day + seventh.date
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-blue-50 border border-blue-100 hover:bg-blue-100"
                        }`}
                >
                    <div>{seventh.day}</div>
                    <div className="text-xs opacity-80">{seventh.date}</div>
                </button>
            </div>

            {/* ساعت‌ها */}
            <div className={`${theme === "dark" && "text-black"} grid grid-cols-2 gap-4`}>
                <button
                    onClick={() => handleTime("09:00 - 11:00")}
                    className={`rounded-2xl p-4 font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1
                    ${formOrder.deliveryTime === "09:00 - 11:00"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-white border border-blue-100 hover:bg-blue-50"
                        }`}
                >
                    09:00 - 11:00
                </button>

                <button
                    onClick={() => handleTime("11:00 - 13:00")}
                    className={`rounded-2xl p-4 font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1
                    ${formOrder.deliveryTime === "11:00 - 13:00"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-white border border-blue-100 hover:bg-blue-50"
                        }`}
                >
                    11:00 - 13:00
                </button>

                <button
                    onClick={() => handleTime("13:00 - 15:00")}
                    className={`rounded-2xl p-4 font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1
                    ${formOrder.deliveryTime === "13:00 - 15:00"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-white border border-blue-100 hover:bg-blue-50"
                        }`}
                >
                    13:00 - 15:00
                </button>

                <button
                    onClick={() => handleTime("15:00 - 17:00")}
                    className={`rounded-2xl p-4 font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1
                    ${formOrder.deliveryTime === "15:00 - 17:00"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-white border border-blue-100 hover:bg-blue-50"
                        }`}
                >
                    15:00 - 17:00
                </button>

                <button
                    onClick={() => handleTime("17:00 - 19:00")}
                    className={`rounded-2xl p-4 font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1
                    ${formOrder.deliveryTime === "17:00 - 19:00"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-white border border-blue-100 hover:bg-blue-50"
                        }`}
                >
                    17:00 - 19:00
                </button>

                <button
                    onClick={() => handleTime("19:00 - 22:00")}
                    className={`rounded-2xl p-4 font-semibold transition-all duration-300 active:scale-95 hover:-translate-y-1
                    ${formOrder.deliveryTime === "19:00 - 22:00"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-white border border-blue-100 hover:bg-blue-50"
                        }`}
                >
                    19:00 - 22:00
                </button>
            </div>
        </div>
    );
}