import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://fso-part3-69n1.onrender.com/",
                changeOrigin: true,
            },
        },
    },
})
