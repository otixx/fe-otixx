"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        username: e?.target[0]?.value,
        password: e?.target[1]?.value,
      });
      if (res?.ok) {
        router.push("/");
      }
      console.log(res);
    } catch (error) {
      return null;
    }
  };

  return (
    <div>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input className="border" type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            className="border"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
