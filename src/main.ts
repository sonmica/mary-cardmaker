import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter,createWebHistory} from 'vue-router';

// 1. Define route components.
// These can be imported from other files
//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: App },
  { path: '/:playerName', component: App, props: true }
  //{ path: '/about', component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.use(bootstrap);
app.mount('#app');

// Now the app has started!
