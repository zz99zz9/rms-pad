<template>
  <div class="index">
  <!--页顶-->
  <div class="header ">
<div class="welcome ellipsis2 ">{{welcome}}</div>
 <div class="timer ">

<div class='date'>
<span class='day' >{{day}}</span>
<span class='week'>{{week}}</span>
</div>
<span class="time" >{{time}}</span>
</div>
  </div> 
<!--宣传图片-->
<div class="ed" @click="sf()">
<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><div class="pic"></div></swiper-slide>
    <swiper-slide><div class="pic"></div></swiper-slide>
    <swiper-slide><div class="pic"></div></swiper-slide>
    <swiper-slide><div class="pic"></div></swiper-slide>
    <swiper-slide><div class="pic"></div></swiper-slide>
    <swiper-slide><div class="pic"></div></swiper-slide>
    <swiper-slide><div class="pic"></div></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  <!--  <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>-->
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</div>

<!--底部菜单-->
<div class='c'></div>
<div class='qr'>
  <img src='../assets/img/qr.svg'>
  <div class='txt'>微信扫一扫<br>关注D&K客房<br>微信公众号</div>
</div>


<!---->
  </div>

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      welcome:'欢迎光临本宿酒店，欢迎光临本宿酒店欢迎光临本宿酒店欢迎光临本宿酒店欢迎光临本宿酒店欢迎光临本宿酒店欢迎光临本宿酒店，欢迎光临本宿酒店欢迎光临本宿酒店',
      time:"11:22",
      day:'6月8日',
      week:'星期四',
      swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
         // direction : 'vertical',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          scrollbar:'.swiper-scrollbar',//滚动条
          mousewheelControl : true,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
        }
    }
  },beforeCreate(){
//console.log("#_#")
//this.timer()

  },
  computed:{

  },
  created(){
    this.timer()
  },
  methods: {
  timer(){
  	let dt = new Date();
    let h=dt.getHours();
    let m=dt.getMinutes();
    let mon=dt.getMonth()+1;
    let day=dt.getDate();
    let week=dt.getDay();
    if(h<10){h="0"+h} 
    if(m<10){m="0"+m} 
	switch(week){
		case 0:
		week="日"
		case 1:
		week="一"
		case 2:
		week="二"
		case 3:
		week="三"
		case 4:
		week="四"
		case 5:
		week="五"
		case 6:
		week="六"
	}
 this.time = h+":"+m;
  this.day=mon+"月"+day+"日";
  this.week ="星期"+week;
  setTimeout(()=>{this.timer()},1000)
  },
  sf () {
 this.$.ajax({
        method:'post',
        url:'/user',
        data:{
          name:'wise',
          info:'wrong'
        }
 
    });

  }
},
reday:{

}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index{background-color:#fafafa;}
/******head区***************/
.header{height:88px;box-shadow:0 2px 2px rgba(0,0,0,0.1);}
.header .welcome{width:700px;line-height:24px;margin:20px 32px;float:left;height:48px;margin-right:0;}
.header .timer{width:200px;float:right;font-size:48px;margin:15px 32px 0 0;}
.header .timer .time{font-size:48px;float:right;margin-right:6px;}
.header .timer .date{font-size:24px;line-height:24px;float:right;margin-top:6px;}
.header .timer .date span{display:block;margin-right:5px;}
.header .timer .date .day{font-size:14px;}
.header .timer .date .week{font-size:16px;}
/*******广告图片切换************/
.ed{width:920px;float:left;margin:32px;}
.ed .pic{width:100%;height:420px;background:#f4f4f4;border:5px solid #fff;}
.info{padding:15px;height:420px;background:#f4f4f4;border:5px solid #fff;width:260px;float:right;margin-top:32px;border-right:0;}
/********底部二维码**********/
.qr{height:125px;margin-left:32px;margin-top:20px;}
.qr img{height:125px;float:left;}
.qr .txt{float:left;margin-left:10px;padding-top:15px;font-size:18px;line-height:30px;}
@media (max-width:768px){
  .header .welcome{width:500px;margin-right:0;}
.info{width:700px;margin:32px;height:150px;margin-top:-20px;float:left;border-right:5px solid #fff;}
   .ed{width:700px;}
}
</style>
