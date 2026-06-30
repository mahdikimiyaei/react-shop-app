import { useForm } from "react-hook-form"
import { useLogin } from "../hooks/useLogin";
import type z from "zod";
import { editProfileSchema } from "../schema/editProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { FieldErrors } from "react-hook-form";
import { useTheme } from "../hooks/useTheme";

function DashboardForm() {
    const { register, handleSubmit } = useForm<z.infer<typeof editProfileSchema>>({ resolver: zodResolver(editProfileSchema) });
    const { setToken, token } = useLogin();
    const navigate = useNavigate();

    const onSubmit = (data: z.infer<typeof editProfileSchema>) => {
        const { confirmPassword, ...payload } = data;
        const newEntry = {
            userName:payload.userName  || token.userName,
            address: payload.address || token.address,
            postaCode:payload.postaCode || token.postaCode,
            email:token.email || token.email,
            password:payload.password || token.password
        }
        setToken(newEntry);
        localStorage.setItem("userInfo", JSON.stringify(newEntry))
        toast.success("اطلاعات شما با موفقیت ویرایش شد")
        navigate("/");
    }

    const onError = (errors: FieldErrors<z.infer<typeof editProfileSchema>>) => {
        const firstError = Object.values(errors)[0];
        if (firstError?.message) {
            toast.error(firstError?.message);
        }
    }

    const { theme } = useTheme();
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit, onError)} className=" max-w-md mx-auto mt-8 rounded-2xl bg-white shadow-lg border border-gray-200 p-8">
                <h2 className={`${theme === "dark" && "text-black"} text-center text-2xl font-bold text-gray-800 mb-8`}>
                    ویرایش اطلاعات حساب
                </h2>
                {/* نام کاربری */}
                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        نام کاربری
                    </label>
                    <input
                        type="text"
                        {...register("userName")}
                        placeholder="نام کاربری جدید..."
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        ادرس شما
                    </label>
                    <input
                        type="text"
                        {...register("address")}
                        placeholder="آدرس جدید..."
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        کد پستی
                    </label>
                    <input
                        type="text"
                        {...register("postaCode")}
                        placeholder="کد پستی جدید..."
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">
                        رمز عبور 
                    </label>
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="رمز عبور جدید..."
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* تکرار رمز عبور */}
                <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2">
                        تکرار رمز عبور
                    </label>
                    <input
                        type="password"
                        {...register("confirmPassword")}
                        placeholder="تکرار رمز عبور..."
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-indigo-700"
                >
                    ذخیره تغییرات
                </button>
            </form>
        </>
    )
}

export default DashboardForm
