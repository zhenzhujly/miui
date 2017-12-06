<template>
<div id="asides">
  <div class="loopImg">
    <swiper :options="swiperOption" ref="mySwiper" class="tabPlay">
 <!-- slides -->
       <swiper-slide class="slideBox">
          <img src="../assets/xm1.jpg">
      </swiper-slide>
       <swiper-slide class="slideBox">
          <img src="../assets/xm2.jpg">
      </swiper-slide>
       <swiper-slide class="slideBox">
          <img src="../assets/xm3.jpg">
      </swiper-slide>
       <swiper-slide class="slideBox">
          <img src="../assets/xm4.jpg">
      </swiper-slide>
       <swiper-slide class="slideBox">
          <img src="../assets/xm5.jpg">
      </swiper-slide>
       <swiper-slide class="slideBox">
          <img src="../assets/xm6.jpg">
      </swiper-slide>
       <!-- Optional controls -->
       <!-- <div class="swiper-pagination dot"  slot="pagination"></div>
       <div class="swiper-button-prev dot" slot="button-prev"></div>
       <div class="swiper-button-next dot" slot="button-next"></div>
       <div class="swiper-scrollbar dot"   slot="scrollbar"></div> -->
    </swiper>
    <div class="left">
      <ul>
        <li>手机 电话卡
          <span>></span>
        </li>
        <li>笔记本
          <span>></span>
        </li>
        <li>电视 盒子
          <span>></span>
        </li>
        <li>路由器 智能硬件
          <span>></span>
        </li>
        <li>移动电源 电池 插线板
          <span>></span>
        </li>
        <li>耳机 音响
          <span>></span>
        </li>
        <li>保护套 贴膜
          <span>></span>
        </li>
        <li>线材 支架 存储卡
          <span>></span>
        </li>
        <li>箱包 服饰 鞋 眼镜
          <span>></span>
        </li>
        <li>米兔 生活周边
          <span>></span>
        </li>
      </ul>
    </div>
  </div>


  <div class="bottoms">
    <div class="cardType">
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuangoushouji"></use>
          </svg>
          选购手机
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liwu"></use>
          </svg>
          企业团购
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fma"></use>
          </svg>
          F码通道
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoujiqia"></use>
          </svg>
          米粉卡
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yijiuhuanxin"></use>
          </svg>
          以旧换新
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huafeichongzhi"></use>
          </svg>
          话费充值
        </li>
      </ul>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>


</div>
</template>

<script>
import icon from '../../iconfont/iconfont.js'
import { swiper,swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'asides',
  components:{
    swiper,
    swiperSlide
  },
  data () {
      return {
        swiperOption: {
            notNextTick:true,
            direction :'horizontal', 
            autoplay:1500, 
            effect:"fade",
            grabCursor :true,
            setWrapperSize :true,
            pagination: '.swiper-pagination',    
            paginationClickable :true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            mousewheelControl : true,
            observeParents:true,
      }
    }
  },
  methods:{

  },
  watch:{

  },
  mounted(){

  },
  computed:{
       swiper() {
         return this.$refs.mySwiper.swiper
       }
    }
}
</script>

<style scope lang="scss">
#asides{
  width: 1226px;
  height: 640px;
  // background: #a25b14;
  display: inline-block;
  margin: 0 0 0 62px;
}



#asides .loopImg{
  position: relative;
  width: 1226px;
  height: 460px;
  margin: 0 auto;
}
#asides .loopImg .tabPlay{
    overflow: hidden;
    width: 1226px;
    height: 460px;
  }
.slideBox{
  width: 1226px;
  height: 460px;
  display: block;
  float: left;
}
/*#asides .loopImg .tabPlay .dot{
  width:20px;
  height: 20px;
  background: red;
}*/
#asides .loopImg .tabPlay .slideBox img{
  width: 1226px;
  height: 460px;
  display: block;
  margin:0 auto;
}

#asides .left{
  position: absolute;
  left:0px;
  top:0px;
  width: 234px;
  height: 460px;
  background: rgba(0,0,0,0.6);
  display: inline-block;
}
#asides .left ul{
  width: 195px;
  height: 444px;
  /*background: #a57b19;*/
}
#asides .left ul li{
  width: 215px;
  height: 35px;
  margin: 10px 0 0 -25px;
  /*background: #abcdef;*/
  color: #fff;
  font-size: 15px;
  list-style: none;
  line-height: 35px;
}
#asides .left ul li:hover{
  background: #abceef;
}
#asides .left ul li span{
  width: 20px;
  height: 20px;
  /*border:1px solid blue;*/
  display: block;
  margin: -28px 0 -0px 180px;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
}




#asides .bottoms{
  width: 100%;
  height: 170px;
  // background: #e45f35;
  display: flex;
  justify-content:space-between; 
  flex-flow: row nowrap;
  margin-top:15px;
}
#asides .bottoms div{
  width: 316px;
  height: 170px;
  // background: #583497;
  display: inline-block;
}
#asides .bottoms div:nth-of-type(1){
  width: 234px;
  height: 100%;
  // background: #425625;
}
#asides .bottoms .cardType{
  width: 234px;
  height: 100%;
  // background: #000;
  border:1px solid gray;
  box-sizing: border-box;
    ul{
      width: 228px;
      height: 164px;
      margin: 0;
      padding: 3px;
      display: flex;
      justify-content: flex-start;
      flex-flow: row wrap;
       li{
        width: 68px;
        height: 75px;
        list-style: none;
        background: #BB5500;
        border:1px solid gray;
        margin: 5px 0 0 5px;
        display: flex;
        justify-content: center;
        flex-flow: column nowrap;
        align-items: center;
        font-size: 12px;
          .icon {
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
            width: 30px;
            height: 30px;
          }
       }
    }
}
#asides .bottoms div:nth-of-type(2){
  background: url(../assets/xma1.jpg);
}
#asides .bottoms div:nth-of-type(3){
  background: url(../assets/xma2.jpg);
  background-size: cover;
}
#asides .bottoms div:nth-of-type(4){
  background: url(../assets/xma3.jpg);
  background-size: cover;
}
</style>