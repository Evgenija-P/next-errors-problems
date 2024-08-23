"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/admin");
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-10 mx-auto w-7/12">
      <input
        type="email"
        name="email"
        required
        className="w-full h-10 outline outline-1 outline-green-800 rounded-xl px-2 py-2"
      />
      <input
        type="password"
        name="password"
        required
        className="w-full h-10 outline outline-1 outline-green-800 rounded-xl px-2 py-2"
      />
      <button type="submit" className="w-fit px-10 py-4 mx-auto bg-slate-500 rounded-xl">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
