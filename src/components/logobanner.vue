<template>
   <div id="logobanner">
     <div class="logo-left">
       <img src="../assets/logo1.png">
     </div>
     <div class="logo-cen">
       <ul>
         <li @click='miui1'>小米手机</li>
         <li @click='miui2'>红米</li>
         <li @click='miui3'>笔记本</li>
         <li @click='miui4'>电视</li>
         <li @click='miui5'>盒子</li>
         <li @click='miui6'>新品</li>
         <li @click='miui7'>路由器</li>
         <li @click='miui8'>智能硬件</li>
         <li @click='miui9'>服务</li>
         <li @click='miui10'>社区</li>
       </ul>
     </div>
     <div class="logo-rig">
       <div class="froms">
         <input type="" name="">
         <div class="seek">
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fangdajing"></use>
           </svg>
         </div>
         <div class="char char1">小米Max 2</div>
         <div class="char char2">小米Note 3现货</div>
       </div>
     </div>
   </div>
</template>

<script>
import icon from '../../iconfont/iconfont.js'
export default {
  name: 'logobanner',
  data () {
    return {

    }
  },
  methods:{
    miui1(){
      this.$router.push({
        name:'miui1',
      })
    },
    miui2(){
      this.$router.push({
        name:'miui2',
      })
    },
    miui3(){
      this.$router.push({
        name:'miui3',
      })
    },
    miui4(){
      this.$router.push({
        name:'miui4',
      })
    },
    miui5(){
      this.$router.push({
        name:'miui5',
      })
    },
    miui6(){
      this.$router.push({
        name:'miui6',
      })
    },
    miui7(){
      this.$router.push({
        name:'miui7',
      })
    },
    miui8(){
      this.$router.push({
        name:'miui8',
      })
    },
    miui9(){
      this.$router.push({
        name:'miui9',
      })
    },
    miui10(){
      this.$router.push({
        name:'miui10',
      })
    }
  },
  watch:{

  },
  mounted(){

  }
}
</script>

<style scope>
 #logobanner{
  width: 1226px;
  height: 100px;
  /*background:#f73;*/
  margin: 0 0 0 60px;
  display: inline-block;
  position: relative;
 }
  #logobanner .logo-left{
    width: 150px;
    height: 100px;
    /*background: #a82;*/
    display: inline-block;
  }
  #logobanner .logo-left img{
    margin: 20px 0 0 35px;
    display: flex;
  }
  #logobanner .logo-cen{
    width: 665px;
    height: 100px;
    /*background: #a82b72;*/
    display: inline-block;
    margin: -50px 0 0 70px;
    position: relative;
  }
  #logobanner .logo-cen ul{
    width: 590px;
    height: 100px;
    /*background: #d45d23;*/
    margin: 45px 0 0 0;
    position: absolute;
    top: -45px;
  }
   #logobanner .logo-cen ul li{
    list-style: none;
    display: inline-block;
    line-height: 100px;
    margin: 0 0 0 8px;
    font-size: 17px;
   }
   #logobanner .logo-cen ul li:hover{
    color:#ff6700;
   }
  #logobanner .logo-rig{
    width: 280px;
    height: 100px;
    /*background: #b82d27;*/
    display: inline-block;
    margin: 0 0 0 20px;
  }
  #logobanner .logo-rig .froms{
    width: 245px;
    height: 50px;
    /*background: #a54e12;*/
    margin: 25px 0 0 20px;
    position: absolute;
  }
  #logobanner .logo-rig .froms input{
    width: 190px;
    height: 45px;
    border:1px solid gray;
  }
  #logobanner .logo-rig .froms .seek{
    width: 50px;
    height: 47px;
    /*background: #b82f45;*/
    margin: -49px 0 0 194px;
    border:1px solid gray;
    border-left:none;
  }
  #logobanner .logo-rig .froms .seek .icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
   font-size: 23px;
   margin: 10px 0 0 10px;
}
  #logobanner .logo-rig .froms .char{
    width: 70px;
    height: 20px;
    position: absolute;
    background: #999;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
  #logobanner .logo-rig .froms .char1{
    top: 15px;
    left:25px;
  }
  #logobanner .logo-rig .froms .char2{
    width: 85px;
    top: 15px;
    left:100px;
  }
</style>