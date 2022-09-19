import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import "@featherds/styles";
import "@featherds/styles/themes/open-light.css";

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .mount('#app')
