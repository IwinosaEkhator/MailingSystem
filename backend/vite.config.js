import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist', // Specify your output directory for the frontend
        manifest: true,  // Optionally create a manifest for tracking asset files
        rollupOptions: {
            input: ['resources/css/app.css', 'resources/js/app.js'],
        },
    },
});
