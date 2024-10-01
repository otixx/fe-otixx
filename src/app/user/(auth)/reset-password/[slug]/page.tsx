"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormReq } from "@/hook/useForm";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
import { useState } from "react";
const resetPassidPage = () => {
  const { formlogin } = useFormReq();
  const [showPassword, setshowPassword] = useState({
    pass: false,
    confPass: false,
  });

  return (
    <div className="grid h-[100dvh] grid-cols-12">
      <div className="col-span-12 flex items-center justify-center">
        <div className="w-full max-w-lg px-5 xl:max-w-2xl 2xl:max-w-2xl">
          <h1 className="mb-10 text-center text-sm font-bold text-first xl:text-2xl 2xl:text-2xl">
            Reset Password?
          </h1>
          <h3 className="text-center text-xs text-labelForm xl:text-base">
            Buat password baru yang aman untuk akun Anda. Pastikan password
            terdiri dari kombinasi yang kuat untuk menjaga keamanan akun Anda
          </h3>
          <Form {...formlogin}>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className="mt-10 space-y-10"
            >
              <FormField
                // control={formRegisterSchema.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="h-12 border-gray-500 focus:border-first focus:text-black focus:outline-none"
                          type={showPassword?.pass ? "text" : "password"}
                          {...field}
                        />
                        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400">
                          {showPassword?.pass ? (
                            <EyeClosedIcon
                              className="h-5 w-5 text-gray-500 hover:text-first"
                              onClick={() =>
                                setshowPassword((prevState) => ({
                                  ...prevState,
                                  pass: false,
                                }))
                              }
                            />
                          ) : (
                            <EyeIcon
                              className="h-5 w-5 text-gray-500 hover:text-first"
                              onClick={() =>
                                setshowPassword((prevState) => ({
                                  ...prevState,
                                  pass: true,
                                }))
                              }
                            />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                // control={formRegister.control}
                name="confirm_pass"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Konfirmasi Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="h-12 border-gray-500 focus:border-first focus:text-black focus:outline-none"
                          type={showPassword?.confPass ? "text" : "password"}
                          {...field}
                        />
                        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400">
                          {showPassword?.confPass ? (
                            <EyeClosedIcon
                              className="h-5 w-5 text-gray-500 hover:text-first"
                              onClick={() =>
                                setshowPassword((prevState) => ({
                                  ...prevState,
                                  confPass: false,
                                }))
                              }
                            />
                          ) : (
                            <EyeIcon
                              className="h-5 w-5 text-gray-500 hover:text-first"
                              onClick={() =>
                                setshowPassword((prevState) => ({
                                  ...prevState,
                                  confPass: true,
                                }))
                              }
                            />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="h-12 w-full shadow-xl">
                Kirim
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default resetPassidPage;
