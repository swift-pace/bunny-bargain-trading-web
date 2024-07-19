import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            tsDecorators: true,
        }),
    ],
    resolve: {
        alias: {
            "@Assets": path.resolve(__dirname, "./src/assets/"),
            "@Components": path.resolve(__dirname, "./src/components/"),
            "@Services": path.resolve(__dirname, "./src/services/index.ts"),
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            tsconfigRaw: {
                compilerOptions: {
                    experimentalDecorators: true,
                },
            },
        },
    },
})
