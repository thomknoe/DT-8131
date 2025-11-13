// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // keep this for React
    tailwindcss(), // new Tailwind plugin
  ],
  base: "/DT-8131/",
});
