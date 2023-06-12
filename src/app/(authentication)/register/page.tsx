"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/inputs/InputField";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import axios from "axios";
import Link from "next/link";

interface InitialStateProps {
  name: string;
  email: string;
  password: string;
}

const intitialState: InitialStateProps = {
  name: "",
  email: "",
  password: "",
};

export default function Register() {
  const [state, setState] = useState(intitialState);
  const router = useRouter();

  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post("api/register", state)
      .then(() => {
        router.push("/login");
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  return (
    <div className="w-full pt-24 pb-13 p-4 flex justify-center border-b-[1px] border-b-gray-300 dark:border-b-gray-500 mx-auto">
      <div className="py-12 px-12 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer dark:text-gray-50">
            Admin Registration Panel
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-light dark:text-gray-100 text-gray-700 tracking-wide cursor-pointer">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <Input
            Icon={BiUser}
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={state.name}
            onChange={handleChange}
          />
          <Input
            Icon={AiOutlineMail}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
          <Input
            Icon={RiLockPasswordLine}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />

          <div className="text-center mt-6">
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <p className="mt-4 text-sm">
              Already Have An Account?{" "}
              <Link href="/login">
                <span className="underline cursor-pointer"> Sign In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
