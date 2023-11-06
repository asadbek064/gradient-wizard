import { createApp } from 'vue';
import VueClipboard from 'vue3-clipboard'
import VueAnalytics from 'vue3-analytics'
import App from './App.vue';
import "./main.css";
import "./gtm";

createApp(App).use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
}).use(VueAnalytics, {
  id: '#'
}).mount('#app');
