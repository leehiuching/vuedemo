<template>
    <el-container class="admin">
        <el-aside width="200px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from "./common/Header.vue";
    import Aside from "./common/Aside.vue";
    export default {
        components: {
            Header,
            Aside
        }
    }
</script>

<style scoped>
.el-header {
    background-color: #fafafa;
}
.el-main {
    background-color: #fff;
}
.admin {
    height: 100%;
}
</style>