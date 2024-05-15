import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/en/switzerland/intermediary/funds",
  plugins: [react(), TanStackRouterVite()],
});
