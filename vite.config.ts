import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base =
    command === "serve" ? "/" : "/Synergy-Blockchain-Pacific-Ingage-DAO/";

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
    publicDir: "public",
  };
});
