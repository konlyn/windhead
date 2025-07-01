"use client";

import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/pagesTsx/common/NavBar";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NavBar />
      {children}
    </SessionProvider>
  );
}