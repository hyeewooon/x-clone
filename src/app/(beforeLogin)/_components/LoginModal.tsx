"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginModal() {
  const router = useRouter();

  const [state, setState] = useState({
    id: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  function goHome() {
    router.back();
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username: state.id,
        password: state.password,
        redirect: false,
      });

      if (!res?.error) {
        router.replace("/home");
      }
    } catch (error) {
      console.log(error);
      setMessage("아이디와 비밀번호가 일치하지 않습니다.");
    }
  }

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex items-center justify-center w-full h-full absolute top-0 left-0">
      <div className="w-[300px] h-[300px] bg-gray-800 rounded-md text-white relative">
        <button className="absolute right-3 top-0" onClick={goHome}>
          x
        </button>

        <form onSubmit={submit}>
          <Link href="/home">login</Link>

          <div>
            <label htmlFor="credentials-id">id</label>
            <input
              className="bg-gray-500"
              id="credentials-id"
              name="id"
              value={state.id}
              onChange={change}
            />
          </div>

          <div>
            <label htmlFor="credentials-password">password</label>
            <input
              className="bg-gray-500"
              id="credentials-password"
              name="password"
              value={state.password}
              onChange={change}
            />
          </div>

          <button type="submit">submit</button>

          <p className="text-red-300">{message}</p>
        </form>
      </div>
    </div>
  );
}
