import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 usa EXACTAMENTE el nombre del repo de GitHub
export default defineConfig({
  plugins: [react()],
  base: "/medula-landing-react/",
});
