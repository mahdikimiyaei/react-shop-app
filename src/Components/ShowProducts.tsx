import { useNavigate } from "react-router-dom";
import type {  IProductProps } from "../modules/IProduct.module";
import { useTheme } from "../hooks/useTheme";

export default function ShowProducts({
  product
}: IProductProps) {
  const navigate = useNavigate();
  const {theme} = useTheme();

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
    <div className="rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="p-6 text-right">
        <h2 className={`${theme === "dark" && "text-black"} mb-4 text-2xl font-bold`}>
          {product.name}
        </h2>

        <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-500">قیمت</span>
          <span className="text-lg font-bold text-green-600">
            {product.price} تومان
          </span>
        </div>

        <div className="mb-6">
          <p className="mb-2 text-gray-500">توضیحات</p>
          <p className="line-clamp-3 leading-7 text-gray-700">
            {product.description}
          </p>
        </div>

        <button
          onClick={() => navigate(`/details/${product.id}`)}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          مشاهده جزئیات
        </button>
      </div>
    </div>
    </div>
  );
}