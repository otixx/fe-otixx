import { z } from "zod";
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
);
export const formLoginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "username harus di isi" })
    .max(12, { message: "username terlalu panjang" }),
  password: z.string().min(1, { message: "password harus di isi" }),
});
export const formRegisterSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "username harus di isi" })
      .max(12, { message: "username terlalu panjang" }),
    email: z
      .string()
      .min(2, { message: "email harus di isi" })
      .email({ message: "masukkan email dengan benar" })
      .max(50),
    phone_number: z
      .string()
      .min(10, {
        message:
          "Nomor telepon harus terdiri dari 10-13 digit angka tanpa karakter lain. Silakan masukkan nomor telepon yang valid sesuai",
      })
      .max(13, {
        message: "Nomor telepon tidak valid terlalu panjang",
      }),
    address: z.string().min(2, { message: "alamat harus di isi" }),
    password: z.string().regex(passwordValidation, {
      message:
        "Password harus mengandung minimal 8 karakter, termasuk setidaknya satu huruf besar dan satu angka. Silakan coba lagi.",
    }),
    confirm_pass: z.string(),
    terms: z.boolean().refine((value) => value === true, "wajib centang brok"),
  })
  .refine((data) => data.password == data.confirm_pass, {
    message: "Password tidak sama",
    path: ["confirm_pass"],
  });
