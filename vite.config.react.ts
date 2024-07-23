/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";

import type { UserConfig } from "vite";

const reactConfig: UserConfig = {
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
  plugins: [react()],
  test: {
    setupFiles: ["vitest-setup.ts"],
  },
};

export default reactConfig;
