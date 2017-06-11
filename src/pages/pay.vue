
<template>
  <div class="pay">
  	<div class="tit">
下单成功！已为您锁定客房，您需要在10分钟内完成支付，逾时将取消订单！
<div class="countdown" >{{time}}</div>
	</div>
	<ul class="payqr">
<li>支付宝支付<br><img :src="data.alipay"></li>
<li>微信支付<br><img :src="data.weixin"></li>
	</ul>
	<div class="c"></div>
	<div class="info">
		入住时间：{{data.stime}}
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		退房时间：{{data.etime}}<br>
		入住客房:{{data.number}}房
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		预定人手机:{{data.mobile}}
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		应付金额:{{data.jiage}}
	</div>

	<router-link to="/cancel" class="cbtn">取消订单</router-link>
	<!---->

  </div>
  
</template>

<script>
export default {
  name: 'pay',
  data () {
return {
		dialogVisible: false,
		time:'',
		data:{
			stime:'2017年5月20日 20:05',
			etime:'2017年5月21日 12:05',
			number:'1011',
			mobile:'18600000005',
			jiage:'300元',
			weixin:require('../assets/img/qr.svg'),
			alipay:require('../assets/img/qr.svg')
		}
};
  	},
	   created(){
		   this.taketime()
	   },
  methods: {
  	taketime(){
  		let nowt = new Date();
let endt = new Date(nowt.getTime() + 60*10000);
this.CountDown(endt);
setTimeout(()=>{this.$router.push('/Index')},60*10000)
  	},
CountDown(v){
let nowt = new Date();
let endt = v
//let ttt = new Date(nowt.getTime() + 60*10000);
//console.log (ttt);
let t =endt.getTime() - nowt.getTime();
let m=Math.floor(t/1000/60%60);
let s=Math.floor(t/1000%60);
this.time = m + "分" + s + "秒";
setTimeout(()=>{this.CountDown(v)},1000)

}
  	}
  }
  	</script>
<style scoped>
.tit{font-size:20px;color:#000;padding-top:64px;padding-bottom:56px;text-align:center;}
.tit .countdown{font-size:36px;padding-top:24px;height:50px;}
.payqr{padding-left:15px;padding-right:15px;}
.payqr li{font-size:24px;color:#000;width:50%;float:left;text-align:center;}
.payqr li img{margin-top:32px;margin-bottom:56px;height:240px;}
.info{font-size:14px;color:#444;line-height:200%;text-align:center;}

</style>