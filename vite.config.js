import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
export default defineConfig({
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [],
        },
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@src/types': path.resolve(__dirname, './src/types'),
            '@ui': path.resolve(__dirname, './src/ui'),
        },
    },
});
