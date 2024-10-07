import { formLoginSchema } from "@/lib/schemas/login.validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";
interface LoginError {
  data: null;
  message: string;
  status: number;
}
export const useLogin = () => {
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
    const { username, password } = values;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      if (!res?.ok && res?.status !== 200 && res?.error) {
        const error: LoginError = JSON.parse(res?.error);
        console.log(error?.message);
        return;
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { onSubmit };
};
