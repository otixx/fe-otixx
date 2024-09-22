"use client";
import instance from "@/lib/axios";
import { signIn } from "next-auth/react";
async function getServerSideProps({ username, password }: any) {
  try {
    const res = await instance.post("/user/login", {
      username,
      password,
    });
    return res;
  } catch (error) {
    return null;
  }
}
export default async function LoginPage({ data }: any) {
  console.log(data);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await getServerSideProps({
        username: e?.target[0]?.value,
        password: e?.target[1]?.value,
      });

      // const res = await signIn("credentials", {
      //   redirect: false,
      //   callbackUrl: "/",
      //   username: e?.target[0]?.value,
      //   password: e?.target[1]?.value,
      // });
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
