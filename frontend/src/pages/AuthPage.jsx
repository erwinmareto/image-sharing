"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { login, register } from "@/fetcher/auth";

const AuthPage = ({ isRegister }) => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    if (isRegister) {
      await register(payload);
    }
    const user = await login(payload);
    router.push("/");
    return user;
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md  w-full space-y-8 bg-cyan-400 p-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-5 text-center">
          {isRegister ? "Register" : "Log In"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username:
              </label>
              <input
                type="text"
                name="username"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isRegister ? "Register" : "Log In"}
            </button>
            <Link
              href={`/auth/${isRegister ? "login" : "register"}`}
              className="w-full py-2 px-4 text-center underline text-sm font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:underline"
            >
              {isRegister ? "Log In" : "Register"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
