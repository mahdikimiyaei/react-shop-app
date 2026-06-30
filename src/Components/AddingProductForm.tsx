import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { addProductSchema } from "../schema/addProductSchema"
import type z from "zod"
import { addProduct } from "../services/data";
import type { FieldErrors } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

function AddingProductForm() {
  const { register, handleSubmit } = useForm<z.input<typeof addProductSchema>>({ resolver: zodResolver(addProductSchema) })
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const onSubmitAddProduct = async (data: z.infer<typeof addProductSchema>) => {
    setIsSuccess(true)
    const newEntry = {
      id: Date.now(),
      name: data.name,
      price: data.price,
      description: data.description
    }
    await addProduct(newEntry);
    navigate("/");
  }

  useEffect(() => {
    if (isSuccess === true) toast.success("محصول مورد ظر شما با موفقیت اضافه شد");
  }, [isSuccess])

  const onErrorAddProduct = (errors: FieldErrors<z.infer<typeof addProductSchema>>) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError?.message);
    }
  }
  const {theme} = useTheme();

  return (
    <>

      <div className="max-w-md mx-auto mt-10 rounded-lg bg-white p-6 shadow-lg">
        <h2 className={`${theme === "dark" && "text-black"} mb-6 text-center text-2xl font-bold`}>
          افزودن محصول
        </h2>

        <form onSubmit={handleSubmit(onSubmitAddProduct, onErrorAddProduct)} className={`${theme === "dark" && "text-black"} space-y-5`}>
          <div>
            <label htmlFor="productName" className={`${theme === "dark" && "text-black"} mb-2 block text-sm font-medium`}>
              نام محصول
            </label>
            <input
              type="text"
              {...register("name")}
              id="productName"
              placeholder="نام محصول را وارد کنید..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="pricesProduct" className={`${theme === "dark" && "text-black"} mb-2 block text-sm font-medium`}>
              قیمت
            </label>
            <input
              type="number"
              {...register("price", { valueAsNumber: true })}
              id="pricesProduct"
              placeholder="قیمت محصول"
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="descriptionProduct" className={`${theme === "dark" && "text-black"} mb-2 block text-sm font-medium`}>
              توضیحات
            </label>
            <textarea
              {...register("description")}
              rows={4}
              id="descriptionProduct"
              placeholder="توضیحات محصول..."
              className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            افزودن محصول
          </button>
        </form>
      </div>
    </>
  )
}

export default AddingProductForm
