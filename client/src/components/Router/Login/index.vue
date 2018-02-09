<template>
  <div class="login-box">
    <form>
        <div class="form-group">
          <label for="formGroupExampleInput">用户名</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="输入用户名" v-model="loginForm.user">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">密码</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="输入密码" v-model="loginForm.password">
        </div>
        <button type="button" class="btn btn-primary" @click="submit">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      if (this.loginForm.user == "" || this.loginForm.password == "") {
        alert("请输入用户名或者密码");
        this.loginForm.user = "";
        this.loginForm.password = "";
      } else {
        this.$axios
          .get("http://localhost:3000/api/user/getUser", this.loginForm)
          .then(data => {
            data.data.msg.map((item, val) => {
              if (item.user === this.loginForm.user || item.password === this.loginForm.password) {   
                setTimeout(() => {
                  this.$router.push("/home");
                }, 2000);
              }else{
                alert('登录失败');
                this.loginForm.user='';
                this.loginForm.password='';
              }
                 
            });
          });

        window.sessionStorage.setItem("user", JSON.stringify(this.loginForm));
      }
    }
  }
};
</script>
<style scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-primary {
  width: 200px;
  margin-top: 50px;
}
</style>

