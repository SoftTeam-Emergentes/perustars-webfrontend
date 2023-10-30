import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//Add PrimeVue
import PrimeVue from 'primevue/config';

//Add PrimeFlex
import 'primeflex/primeflex.css';

//Add Theme
import 'primevue/resources/themes/lara-light-teal/theme.css'
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css'
//Component





const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.mount('#app')
