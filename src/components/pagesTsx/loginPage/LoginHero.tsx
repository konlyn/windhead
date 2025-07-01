"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginHero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setErrorMsg("Email ou senha inválidos");
    } else {
      setErrorMsg("");
      router.push("/");
    }
  }

  function handleGoogleLogin() {
    signIn("google");
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-semibold text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Entrar
          </button>

          {errorMsg && <p className="text-red-600 mt-2 text-center">{errorMsg}</p>}
        </form>

        {/* Botão para login com Google */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            <span>Entrar com Google</span>
          </button>

          {/* Link para registro */}
          <p className="mt-4 text-center text-gray-700">
            Não tem uma conta?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Registre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;