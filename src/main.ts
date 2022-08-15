import { createApp } from 'vue'
import { Quasar, LocalStorage, Loading } from 'quasar'
import quasarLang from 'quasar/lang/en-GB'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { NhostClient } from '@nhost/vue'
import { createApolloClient } from '@nhost/apollo'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import Home from './pages/Home.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

const routes: RouteRecordRaw[] = [{ path: '/', component: Home }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN || 'localhost:1337',
  region: import.meta.env.VITE_NHOST_REGION,
})

const apolloClient = createApolloClient({ nhost })

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(nhost)
  .use(Quasar, {
    plugins: [LocalStorage, Loading],
    lang: quasarLang,
  })
  .use(router)
  .mount('#app')
