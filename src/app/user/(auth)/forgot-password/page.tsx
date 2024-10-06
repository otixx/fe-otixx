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
const ForgotPage = () => {
  const { formlogin } = useFormReq();
  return (
    <div className="grid h-[100dvh] grid-cols-12">
      <div className="col-span-12 flex items-center justify-center">
        <div className="w-full max-w-lg px-5 xl:max-w-2xl 2xl:max-w-2xl">
          <h1 className="mb-10 text-center text-sm font-bold text-first xl:text-2xl 2xl:text-2xl">
            Lupa Password?
          </h1>
          <h3 className="text-center text-xs text-labelForm xl:text-base">
            Jangan khawatir, kami siap membantu! Masukkan email Anda di bawah
            ini, dan kami akan mengirimkan instruksi untuk mengatur ulang
            password Anda.
          </h3>
          <Form {...formlogin}>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className="mt-10 space-y-10"
            >
              <FormField
                control={formlogin.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-gray-500 focus:border-first focus:text-black focus:outline-none"
                        {...field}
                      />
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

export default ForgotPage;
