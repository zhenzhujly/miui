<template>
   <div id="headers">
       <div class="menu">
          <div class="m-left">
            <a href="">小米商城</a>|
            <a href="">MIUI</a>|
            <a href="">米聊</a>|
            <a href="">游戏</a>|
            <a href="">多看阅读</a>|
            <a href="">云服务</a>|
            <a href="">金融</a>|
            <a href="">米币</a>|
            <a href="">小米商城手机版</a>|
            <a href="">问题反馈</a>|
            <a href="">Select Region</a>
          </div>
          <div class="m-right">
            <div class="right-l rig">
              <a href="">登录</a>|
              <a href="">注册</a>|
              <a href="">消息通知</a>
            </div>
            <div class="right-r rig">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shopping-cart"></use>
              </svg>
              <a href="">购物车(0)</a>
            </div>
          </div>
        </div>
   </div>
</template>

<script>
import icon from '../../iconfont/iconfont.js'
export default {

  name: 'headers',
  data () {
    return {

    }
  },
  methods:{

  },
  watch:{

  },
  mounted(){

  }
}
</script>

<style scope>
 #headers .menu{
  width: 100%;
  height: 40px;
  background:#333;
}
#headers .menu .m-left{
  width: 685px;
  height: 40px;
  /*background:#a57;*/
  float:left;
  text-align: center;
  line-height: 40px;
  margin: 0 0 0 10px;
  color:gray;
}
#headers .menu .m-left a{
  text-decoration: none;
  color:#ccc;
  font-size: 13px;
  margin: 0 5px 0 3px;
}
#headers .menu .m-left a:hover{
  color:#fff;
}
#headers .menu .m-right{
  width: 360px;
  height: 40px;
  /*background:#a09;*/
  float:right;
  margin: 0 20px 0 0;
  color: #999;
  display: inline-block;
}
#headers .menu .m-right .right-l{
  width: 180px;
  height: 40px;
  /*background:#999;*/
}
#headers .menu .m-right .rig a{
  text-align:center;
  text-decoration: none;
  line-height: 40px;
  color: #ccc;
  margin: 0 5px 0 3px;
}
#headers .menu .m-right .rig a:hover{
  color:#fff;
}
#headers .menu .m-right .right-r{
  width: 120px;
  height: 40px;
  /*background:#d25;*/
  margin: -40px 0 0 190px;
}
#headers .menu .m-right .right-r .icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>