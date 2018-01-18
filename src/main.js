import "normalize.css";
import "./less/index.less"
import Vue from "../node_modules/vue/dist/vue.js"
import App from "./component/App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routerConfig from "./router/index.js";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8899";
Vue.prototype.$http = axios;
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import api from "./js/api_config.js";
Vue.prototype.$api = api;
new Vue({
    el:"#app",
    router:new VueRouter(routerConfig),
    render: function (createElement) {
        return createElement(App);
    }
})