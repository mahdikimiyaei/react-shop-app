import { z } from "zod";

export const editProfileSchema = z
    .object({
        userName: z
            .string()
            .trim()
            .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
            .or(z.literal("")),

        address: z
            .string()
            .trim()
            .min(10, "آدرس باید حداقل ۱۰ کاراکتر باشد")
            .or(z.literal("")),

        postaCode: z
            .string()
            .trim()
            .length(10, "کد پستی باید ۱۰ رقم باشد")
            .or(z.literal("")),

        password: z
            .string()
            .trim()
            .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
            .or(z.literal("")),

        confirmPassword: z
            .string()
            .trim()
            .or(z.literal("")),
    })
    .refine(
        (data) => {
            // اگر هر دو خالی باشند مشکلی نیست
            if (data.password === "" && data.confirmPassword === "") {
                return true;
            }

            return data.password === data.confirmPassword;
        },
        {
            message: "رمز عبور یکسان نیستند",
            path: ["confirmPassword"],
        }
    );