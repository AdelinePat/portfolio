import { defineConfig } from "vite";
import { resolve } from "path";

const isWindows = process.platform === "win32";

export default defineConfig(() => {
  const base = process.env.VITE_BASE || "/portfolio/";

  return {
    base,
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
        usePolling: true, // Windows + Docker fix
        interval: 1000,
      },
    },
  };
});

// export default defineConfig({
//   base: "/portfolio/",
//   root: "./src",
//   build: {
//     outDir: "../dist",
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, "src/index.html"),
//         contact: resolve(__dirname, "src/contact.html"),
//         projects: resolve(__dirname, "src/projects.html"),
//         certifications: resolve(__dirname, "src/certifications.html"),
//       },
//     },
//   },
//   server: {
//     host: "0.0.0.0", // container listens on all interfaces
//     watch: {
//       usePolling: true, // Windows + Docker fix
//       interval: 1000,
//     },
//   },
// });
