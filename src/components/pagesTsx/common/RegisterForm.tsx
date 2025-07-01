"use client";

import React, { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password }),
    });

    if (res.ok) {
      setMsg("Usuário registrado com sucesso!");
      setEmail("");
      setName("");
      setPassword("");
    } else {
      const text = await res.text();
      setMsg(`Erro: ${text}`);
    }
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Registrar</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 font-semibold hover:bg-blue-700 transition"
        >
          Registrar
        </button>
      </form>

      {msg && <p className="mt-4 text-center text-red-600">{msg}</p>}
    </div>
  );
}