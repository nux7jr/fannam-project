// style
import "@/app/assets/css/reset.css";
import "@/app/assets/css/normalize.css";
import "@/app/assets/css/vars.css";
import "@/app/assets/css/app.css";


// vue
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from '@/app/index.vue';
import Router from '@/app/router';

const pinia = createPinia()

createApp(App).use(pinia).use(Router).mount("#app");