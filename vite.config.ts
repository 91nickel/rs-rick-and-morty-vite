import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            base: "/",
            srcDir: "src",
            filename: "sw.ts",
            injectRegister: 'auto',
            includeAssets: ['favicon.ico'],
            strategies: "injectManifest",
            injectManifest: {
                minify: false,
                enableWorkboxModulesLogs: true,
            },
            manifest: {
                name: 'Rick & Morty',
                short_name: 'Rick&Morty',
                description: 'Result School example app',
                theme_color: '#FFFFFF',
                display: "standalone",
                start_url: "/",
                orientation: 'portrait-primary',
                icons: [
                    {
                        "src": "/src/assets/icons/512-512.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "any maskable"
                    },
                    {
                        "src": "/src/assets/icons/192-192.png",
                        "sizes": "192x192",
                        "type": "image/png",
                    },
                    {
                        "src": "/src/assets/icons/144-144.png",
                        "sizes": "144x144",
                        "type": "image/png",
                    },
                    {
                        "src": "/src/assets/icons/96-96.png",
                        "sizes": "96x96",
                        "type": "image/png",
                    },
                    {
                        "src": "/src/assets/icons/72-72.png",
                        "sizes": "72x72",
                        "type": "image/png",
                    },
                    {
                        "src": "/src/assets/icons/48-48.png",
                        "sizes": "48x48",
                        "type": "image/png",
                    },]
            }
        }),
    ],
})
