import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.3.13:3000'],
  },
};

export default nextConfig;
