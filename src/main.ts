import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(bootstrap).mount('#app');
