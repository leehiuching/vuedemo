<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
    <h1>后台管理系统</h1>
    <el-form-item label="用户名" prop="uname">
      <el-input v-model="ruleForm2.uname"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="upwd">
      <el-input type="password" v-model="ruleForm2.upwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    // var validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm2: {
        uname: '',
        upwd: ''
      },
      rules2: {
        upwd: [
          // { validator: validatePass, trigger: 'blur' },第一种校验规则
          { required: true,message: "请输入密码",trigger: 'blur'}//第二种检验规则
        ],
        uname: [
          { required: true,message: "请输入用户名",trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 登陆操作
    login(){
      this.$http.post(this.$api.login,this.ruleForm2).then(res=>{
        if (res.data.status == 0) {
          this.$alert("登陆成功",{
            callback:action=>{
              this.$router.push({name:'goodsCtList'});
            }
          });
        }else {
          this.$alert(res.data.message);
        }
      });
    }
  }
}
</script>
<style scoped>
.el-form {
  width: 420px;
  height: 170px;
  margin: 0 auto;
  border: 1px solid #fff; 
  border-radius: 8px;
  padding: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.el-input {
  width: 330px;
}
h1 {
  margin: 0;
  padding: 0;
  color: #fff;
  position: absolute;
  font-size: 20px;
  top: -40px;
  text-align: center;
  width: 100%;
}
</style>


