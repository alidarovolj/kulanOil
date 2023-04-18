import { createApp } from "vue";
import "./style.css";
import "@/assets/css/fonts.css";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Toaster from "@meforma/vue-toaster";

createApp(App).use(createMetaManager()).use(Toaster).use(router).mount("#app");
