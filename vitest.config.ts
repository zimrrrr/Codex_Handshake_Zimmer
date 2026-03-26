import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

const rootDirectory = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  esbuild: {
    jsx: "automatic"
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"]
  },
  resolve: {
    alias: {
      "@": rootDirectory
    }
  }
});
