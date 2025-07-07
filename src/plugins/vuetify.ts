/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#9308DE',
          background: '#FFFFFF',
          surface: '#E1CFEB',
          'on-surface': '#212121'
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#250138',
          background: '#121212',
          surface: '#1E1E1E',
          'on-surface': '#E0E0E0'
        },
      },
    },
  },
})