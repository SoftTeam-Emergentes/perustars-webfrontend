import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
//Add PrimeFlex
import "primevue/resources/themes/lara-light-blue/theme.css";

//Add Theme
import 'primevue/resources/themes/lara-light-teal/theme.css'
import "primevue/resources/primevue.min.css";
//Component



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.mount('#app')
