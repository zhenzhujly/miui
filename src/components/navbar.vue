<template>
  <div id="navbar"> 
    <!-- <el-row class="tac">
       <el-col :span="12">
          <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row> -->
    <div class="bots">
      <div></div>
      <div>
        <p>
          <a href="">小米商城</a>丨
          <a href="">MIUI</a>丨
          <a href="">米聊</a>丨
          <a href="">多看书城</a>丨
          <a href="">小米路由器</a>丨
          <a href="">视频电话</a>丨
          <a href="">小米天猫商店</a>丨
          <a href="">小米淘宝直营店</a>丨
          <a href="">小米网盟</a>丨
          <a href="">小米移动</a>丨
          <a href="">隐私政策</a>丨
          <a href="">Select Region</a>
        </p>
        <p>©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号 
违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
      </div>
      <div>
        <img src="../assets/sf1.png">
        <img src="../assets/sf2.png">
        <img src="../assets/sf3.png">
        <img src="../assets/sf4.png">
      </div>
    </div>
    <div class="base"></div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  components:{

  },
  data () {
    return {
    
    }
  },
  methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  mounted(){

  }
}
</script>
<style lang="scss" scope>
#navbar{
  width: 1226px;
  height: 166px;
  // background: #a24b75;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 0 auto;
}
.bots{
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  // background: #a22364;
    div:nth-of-type(1){
      width: 57px;
      height: 57px;
      background: url(../assets/logo1.png)
    }
    div:nth-of-type(2){
      width: 805px;
      height: 57px;
      // background: #d42f75;
      margin: 0 0 0 -10px;
      display: flex;
      flex-flow: column;
       p:nth-of-type(1){
        width: 805px;
        height: 19px;
        // background: #cd4315;
        color:#757575;
        font-size: 10px;
        margin: 0;
        padding: 0;
          a{
             text-decoration: none;
             color:#757575;
          }
       }
       p:nth-of-type(2){
        width: 583px;
        height: 36px;
        // background: #ef4315;
        font-size: 12px;
        margin: 0;
        color:#b0b0b0;
       }
    }
    div:nth-of-type(3){
      width: 340px;
      height: 28px;
      // background: #ab4524;
        img{
          width: 80px;
          height: 28px;
        }
    }
}
.base{
  width: 267px;
  height: 19px;
  margin: 0 auto;
  background: url(../assets/sfw.png);
  margin: 15px auto -40px;
}
</style>