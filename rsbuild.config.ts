import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: './src/index.tsx',
        },
    },
    dev: {
        hmr: true,
        liveReload: true,
        progressBar: true,
        cliShortcuts: true,
        client: {
            port: 3000,
        },
    },
    server: {
        historyApiFallback: true,
    },
    html: {
        template: './public/index.html',
    },
    output: {
        distPath: {
            root: 'dist',
            js: 'js',
            css: 'css',
            assets: 'assets',
        },
    },
    tools: {
        bundlerChain: (chain, { CHAIN_ID }) => {
            // Add any custom webpack configurations if needed
        },
    },
})
