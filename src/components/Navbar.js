"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <div>
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>
      </div>

      {/* Middle - Links */}
      <div className="flex gap-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/products" className="hover:text-gray-300">
          Products
        </Link>

        {/* Protected Route (only if logged in) */}
        {session && (
          <Link
            href="/dashboard/add-product"
            className="hover:text-gray-300"
          >
            Add Product
          </Link>
        )}
      </div>

      {/* Right - Auth Section */}
      <div>
        {status === "loading" ? (
          <p>Loading...</p>
        ) : session ? (
          <div className="flex items-center gap-3">
            <span className="text-sm">Hi, {session.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google", { callbackUrl: "/products" })}
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
          >
            Login with Google
          </button>
        )}
      </div>
    </nav>
  );
}
