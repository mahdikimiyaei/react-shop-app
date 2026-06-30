import { z } from "zod";

export const addProductSchema = z.object({
    name: z.string().trim().min(1, "وارد کردن نام محصول الزامی است").min(5, "نام محصول حداقل باید دارای 5 کاراکتر باشد"),
    price: z.number({ error: "وارد کردن قیمت محصول الزامی است" }).int().positive("قیمت نمیتواند یک عدد منفی باشد").min(10000, "قیمت محصول باید حداقل 5 رقمی باشد"),
    description: z.string().trim().min(1, "وارد کردن توضیحات درباره محصول الزامی است").min(10, "کمی بیشتر توضیح دهید")
})