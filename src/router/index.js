import Login from "../component/login/Login.vue";
import Admin from "../component/admin/Admin.vue";
import Edit from "../component/admin/goods/content/Edit.vue";
export default {
    routes:[
        {name: "login",path: "/login",component: Login},
        {name: "admin",path: "/admin",component: Admin}
    ]
}