import { publicApi } from "@/lib/axios";
import { formLoginSchema } from "@/lib/schemas/login.validation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
interface LoginError {
  data: null;
  message: string;
  status: number;
}
export const useLogin = () => {
  const [msg, setMsg] = useState("");
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
        setMsg(error?.message);
        return;
      }
      router.push("/");
    } catch (error) {
      setMsg("Server Error");
    }
  };
  return { onSubmit, msg };
};
export const useResgiter = () => {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
    const { username, password } = values;
    console.log(values);
    try {
      const res = await publicApi.post("/api/register", {
        username,
        password,
      });
      const data = res?.data;
      if (data?.status == 500) {
        setMsg(data?.message);
        return;
      }

      router.push("/");
    } catch (error) {
      setMsg("Server Error");
    }
  };
  return { onSubmit, msg };
};
