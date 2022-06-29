import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import ethers from "./plugins/ethers";

Vue.use(VueCompositionAPI, ethers);

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
