import Vue from "Vue"
import App from "./component/App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routerConfig from "./router/index.js";
import axios from "axios";
axios.defaults.baseURL = "http://157.122.54.189:9095";
Vue.prototype.$http = axios;
import api from "./js/api_config.js";
Vue.prototype.$api = api;
new Vue({
    el:"#app",
    router:new VueRouter(routerConfig),
    render: function (createElement) {
        return createElement(App);
    }
})