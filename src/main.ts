// style
import "@/app/assets/css/reset.css";
import "@/app/assets/css/normalize.css";
import "@/app/assets/css/vars.css";
import "@/app/assets/css/app.css";


// vue
import { createApp } from 'vue';
import App from '@/app/index.vue';
import Router from '@/app/providers/router';
import i18n from '@/shared/i18n';
import pinia from '@/app/providers/stores';

createApp(App).use(i18n).use(pinia).use(Router).mount("#app");