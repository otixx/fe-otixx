import {
  formLoginSchema,
  formRegisterSchema,
} from "@/lib/schemas/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useFormReq = () => {
  const formlogin = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const formRegister = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      username: "",
      address: "",
      password: "",
      confirm_pass: "",
      email: "",
      phone_number: "",
    },
  });
  return { formlogin, formRegister };
};
