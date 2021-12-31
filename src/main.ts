import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App);

//element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

app.use(ElementPlus);

createApp(App).mount('#app');
