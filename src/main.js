import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

import { Icon } from 'vant';
app.use(Icon)

import router from './router';
app.use(router);

app.mount('#app');
