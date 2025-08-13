import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
    } catch (error) {}
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              className="rounded-md w-full px-3 py-2 border brder-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              className="rounded-md w-full px-3 py-2 border brder-gray-300 outline-none"
              type="email"
              placeholder="Enter your papssword"
              required
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
