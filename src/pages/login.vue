<template>
  <div class="hello">
  
    	<div class="logo">
<img src="../assets/img/logo.svg">
智能后台管理系统
</div>
<div class="intbor sform">
  <i class="ico iconame"></i><input type="text" placeholder="用户名" class="input" id='uname' v-model="uname">
</div>
<div class="intbor sform">
  <i class="ico icopass"></i><input type="password" placeholder="密码" class="input" id="upass" v-model="upass" >
</div>
<span class="sbtn sform ls3" id="sbtn" @click="checku()">登录</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
.login{width:100%;max-width:420px;margin:0 auto;}
.logo{width:110px;margin:150px auto 112px auto;font-size:13px;}
.intbor{background-color:#eee;}
.ico{width:24px;height:24px;display:block;float:left;margin:13px 18px;}
.iconame{background-image:url('../assets/img/name.svg');}
.icopass{background-image:url('../assets/img/pass.svg');}
.input{height:24px;margin-top:13px;border:0;background-color:#eee;}
.sform{width:277px;margin:0 auto 30px auto;height:50px;border-radius:3px;line-height:50px;}
.sbtn{background-color:#000;color:#fff;border:0;font-size:18px;display:block;text-align:center;}
.sbtn:active{background-color:#333;}
</style>
<template>
  <div class="hello">
  
    	<div class="logo">
<img src="../assets/img/logo.svg">
智能后台管理系统
</div>
<div class="intbor sform">
  <i class="ico iconame"></i><input type="text" placeholder="用户名" class="input" id='uname' v-model="uname">
</div>
<div class="intbor sform">
  <i class="ico icopass"></i><input type="password" placeholder="密码" class="input" id="upass" v-model="upass" >
</div>
<span class="sbtn sform ls3" id="sbtn" @click="checku()">登录</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
.login{width:100%;max-width:420px;margin:0 auto;}
.logo{width:110px;margin:150px auto 112px auto;font-size:13px;}
.intbor{background-color:#eee;}
.ico{width:24px;height:24px;display:block;float:left;margin:13px 18px;}
.iconame{background-image:url('../assets/img/name.svg');}
.icopass{background-image:url('../assets/img/pass.svg');}
.input{height:24px;margin-top:13px;border:0;background-color:#eee;}
.sform{width:277px;margin:0 auto 30px auto;height:50px;border-radius:3px;line-height:50px;}
.sbtn{background-color:#000;color:#fff;border:0;font-size:18px;display:block;text-align:center;}
.sbtn:active{background-color:#333;}
</style>
