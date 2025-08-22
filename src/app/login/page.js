"use client"; // Important: this makes it a Client Component

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
