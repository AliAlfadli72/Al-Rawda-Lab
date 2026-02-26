import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // تقليل حجم الـ chunks
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // تقسيم الكود لملفات أصغر (Code Splitting)
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["react-icons"],
        },
      },
    },
    // ضغط مع terser
    minify: "esbuild",
    // حذف console.log من production
    esbuildOptions: {
      drop: ["console", "debugger"],
    },
  },
  // Preload links تلقائياً
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
