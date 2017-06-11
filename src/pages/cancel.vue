
<template>
  <div class="cancel">
<h1 @click="taketime()">您已取消订单</h1>
<router-link to="/index" class="cbtn">返回首页 {{time}}s</router-link>
<span class="hide" id="time"></span>
  </div>
  
</template>

<script>
export default {
  name: 'cancel',
  data () {
return {
time:'10'
};
  	},
    created(){
		   this.taketime()
	   },
  methods: {
 taketime(){
  		let nowt = new Date();
let endt = new Date(nowt.getTime() + 10000);
this.CountDown(endt);
setTimeout(()=>{this.$router.push('/Index')},10000)
  	},
CountDown(v){
let nowt = new Date();
let endt = v
//let ttt = new Date(nowt.getTime() + 60*10000);
//console.log (ttt);
let t =endt.getTime() - nowt.getTime();
let m=Math.floor(t/1000/60%60);
let s=Math.floor(t/1000%60);
this.time = s ;
setTimeout(()=>{this.CountDown(v)},1000)

}
  	}
  }
  	</script>
<style scoped>
h1{margin-top:250px;margin-bottom:98px;text-align:center;}

</style>