// style
import "@/assets/css/reset.css";
import "@/assets/css/normalize.css";
import "@/assets/css/vars.css";
import "@/assets/css/app.css";


// vue
import { createApp } from 'vue'
import App from '@/App.vue'
import Router from "@/router";


createApp(App).use(Router).mount("#app");