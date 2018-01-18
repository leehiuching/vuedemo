<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose" background-color="#267cb7" text-color="#fff">
      <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
          <el-menu-item v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">{{subItem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
    export default {
      data () {
        return {
          menu:[
            {title: "资源下载",children: [
              {title: "内容管理",path: "/a"},
              {title: "类别管理",path: "/b"},
              {title: "评论管理",path: "/c"}
            ]},
            {title: "购物商城",children: [
              {title: "内容管理",path: "/a"},
              {title: "类别管理",path: "/b"},
              {title: "评论管理",path: "/c"}
            ]},
            {title: "订单管理",children: [
              {title: "内容管理",path: "/a"},
              {title: "类别管理",path: "/b"},
              {title: "评论管理",path: "/c"}
            ]}
          ]
        }
      },
      methods: {
          handleOpen(key, keyPath) {
              console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
              console.log(key, keyPath);
          }
      }
    }
</script>

<style scoped>
.el-submenu__title i{
  color: #fff;
}
.el-menu-vertical-demo {
  padding-top: 30px;
}
</style>