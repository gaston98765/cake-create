// Plugins
import Components from 'unplugin-vue-components/vite';
import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import ViteFonts from 'unplugin-fonts/vite';
import VueRouter from 'unplugin-vue-router/vite';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({  // ✅ Ensure Vue is loaded before VueRouter
      template: { transformAssetUrls }
    }),
    VueRouter(),  // ✅ VueRouter must come AFTER Vue
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900' // ✅ Removed trailing comma
          }
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // ✅ Ensure alias is correctly resolved
    }
  },
  server: {
    port: 3000, // ✅ Ensure Vite runs on port 3000
  },
  css: {
    preprocessorOptions: {
      sass: {
        // ✅ Removed `api: 'modern-compiler'`, as it's not a valid option
      },
    },
  },
});

