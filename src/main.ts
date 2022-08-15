import { createApp } from 'vue'
import { Quasar, LocalStorage, Loading } from 'quasar'
import quasarLang from 'quasar/lang/en-GB'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import Home from './pages/Home.vue'

const routes: RouteRecordRaw[] = [{ path: '/', component: Home }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(Quasar, {
    plugins: [LocalStorage, Loading],
    lang: quasarLang,
  })
  .use(router)
  .mount('#app')
