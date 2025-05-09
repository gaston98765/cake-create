/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
//import { registerPlugins } from '@/plugins'

// Components
//import App from './App.vue'

// Composables
//import { createApp } from 'vue'

//const app = createApp(App)

//registerPlugins(app)
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify' // Correctly imported

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // Custom config applied

app.mount('#app')






















