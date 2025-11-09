import { defineConfig } from "vite";
import { resolve } from "path";

const isWindows = process.platform === "win32";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contact: resolve(__dirname, "src/contact.html"),
        projects: resolve(__dirname, "src/projects.html"),
        certifications: resolve(__dirname, "src/certifications.html"),
      },
    },
  },
  server: {
    host: "0.0.0.0", // container listens on all interfaces
    watch: {
      usePolling: isWindows, // Windows + Docker fix
      interval: 5000,
      followSymlinks: true,
    },
    hmr: {
      host: "localhost", // browser connects to localhost: mapped by Docker
    },
  },
  
});
