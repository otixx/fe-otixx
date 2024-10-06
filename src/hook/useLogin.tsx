import { formLoginSchema } from "@/lib/schemas/login.validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const useLogin = () => {
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
    const { username, password } = values;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        // callbackUrl: "/",
        username,
        password,
      });
      if (res?.ok && res?.status === 200) {
        router.push("/");
      }
    } catch (error) {
      return null;
    }
  };
  return { onSubmit };
};
