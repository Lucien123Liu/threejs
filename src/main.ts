import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-plus/packages/theme-chalk/src/base.scss'
// import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(store).use(router).mount("#app");
