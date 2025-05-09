// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#f9f9f9',
          primary: '#ff5a5f',
          secondary: '#ffe5cc',
          onSurface: '#000000',
          onBackground: '#000000',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#1e1e1e',
          primary: '#ff6a6f',
          secondary: '#ffbe80',
          onSurface: '#ffffff',
          onBackground: '#ffffff',
        },
      },
    },
  },
})

