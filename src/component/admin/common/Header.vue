<template>
    <div>
        <el-button>
            <i class="el-icon-menu"></i>
        </el-button>
        <div class="header_right">
            <span class="right_welcome">您好，我是{{uname}}</span>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right"></i>功能
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>预览网站</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">注销登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                uname:"admin"
            }
        },
        methods: {
            logout(){
                this.$http.get(this.$api.logout).then(res=>{
                    if (res.data.status == 0) {
                        this.$alert("退出成功",{
                            callback:action=>{
                                this.$router.push({name: "login"})
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
.header_right {
    float: right;
    line-height: 60px;
}
.right_welcome {
    color: #606266;
}
.el-button {
    margin-top: 10px;
    border: none;
    background-color: #fafafa;
    font-size: 18px;
}
</style>