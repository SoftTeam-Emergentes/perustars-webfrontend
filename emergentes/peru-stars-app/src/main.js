import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
//Add PrimeFlex

//Add Theme
import 'primevue/resources/themes/lara-light-teal/theme.css'
//Component
import Button from "primevue/button";

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Button', Button);
app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.mount('#app')
