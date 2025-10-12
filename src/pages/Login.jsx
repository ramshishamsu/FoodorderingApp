import React from "react";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h2>

        <img
          src="https://images.unsplash.com/photo-1640812570037-ea415861315b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZGllJTIwYXBwJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Food"
          className="rounded-xl mb-6"
        />

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-orange-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-orange-300"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
