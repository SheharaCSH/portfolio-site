import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for the portfolio site.
// base: "./" makes the built asset paths relative, which is the safest
// default for static hosts like Netlify, Vercel, GitHub Pages, etc.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
