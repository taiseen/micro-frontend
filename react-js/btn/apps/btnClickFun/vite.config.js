import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({

  plugins: [
    react(),
    federation({
      name: "BtnClickFunMF",
      filename: "remoteEntry.js",

      exposes: {
        "./Button": "./src/Button",
        "./store": "./src/store",
      },

      remotes: {
        btnPropApp: "http://localhost:5002/assets/remoteEntry.js",
      },

      shared: ["react", "react-dom", "jotai"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

})
