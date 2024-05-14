import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({

  plugins: [
    react(),
    federation({
      name: "BtnPropMF",
      filename: "remoteEntry.js",
      exposes: {
        "./BtnProp": "./src/BtnProp",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },

})
