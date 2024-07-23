/// <reference types="vitest/config" />

import eslint from "vite-plugin-eslint2";
import checker from "vite-plugin-checker";
import dts from "vite-plugin-dts";

import type { UserConfig } from "vite";

const baseConfig: UserConfig = {
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: "src/index.ts",
      name: "Vite Config",
      fileName: "index",
      formats: ["es"],
    },
  },
  plugins: [
    eslint({
      cache: false,
      emitErrorAsWarning: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    }),
    checker({ typescript: true }),
    dts({ rollupTypes: true }),
  ],
  server: {
    open: true,
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["vitest-setup.ts"],
  },
};

export default baseConfig;
