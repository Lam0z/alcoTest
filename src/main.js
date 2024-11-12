import "element-plus/dist/index.css";
import "@/assets/styles/index.scss";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { createApp } from "vue";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount("#app");