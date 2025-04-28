// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
const conf = defineConfig({
    plugins: [
        react({
            include: /\.(jsx|tsx)$/,
            babel: {
                plugins: [],
                configFile: false,
                babelrc: false
            }
        }),
        tsconfigPaths(),
    ],
    logLevel: 'info',

});

export default conf;
