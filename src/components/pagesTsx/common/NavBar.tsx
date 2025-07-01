"use client"

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <p className="text-3xl font-bold">StaticPlus</p>

      <div className="flex items-center gap-6">
        {/* Links visíveis para todos */}
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>

        {/* Se estiver logado, mostra avatar + logout */}
        {session ? (
          <>
            <img
              src={session.user?.image || "/user.png"}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              Sair
            </button>
          </>
        ) : (
          // Se não estiver logado, mostra links Login e Registrar
          <>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
