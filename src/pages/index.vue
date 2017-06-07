<template>
  <div class="index">
  	<div class="header"></div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      uname: '',
      upass:''
    }
  },
  methods: {
    //验证登录信息
    checku() {
      if(uname.value ==upass.value ){
        console.log("ok")
  this.$router.push('/Index')
      }else{
        console.log("over")
        this.$message({
          showClose: true,
          message: '用户名或密码错误',
          type: 'error'
        });
      }
    }

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height:88px;box-shadow:0 2px 5px rgba(0,0,0,0.3);}
</style>
