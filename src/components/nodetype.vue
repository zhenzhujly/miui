<template>
   <div id="nodetype">
      <div class="top">
        <p>小米明星单品</p>
        <div>
          <span><</span>
          <span>></span>
        </div>
      </div>
      <div class="bot">
        <div class="one">
          <div>
            <img src="../assets/st1.png">
          </div>
          <h3>红米Note 4X 浅蓝色</h3>
          <p>5.5 金属机身 4100mAh超长续航</p>
          <p>999元起</p>
        </div>
        <div>
          <div>
            <img src="../assets/st2.png">
          </div>
          <h3>红米Note 4X</h3>
          <p>4100mAh超长续航，多彩金属</p>
          <p>999元起</p>
        </div>
        <div>
          <div>
            <img src="../assets/st3.png">
          </div>
          <h3>红米4X</h3>
          <p>4100mAh超长续航，8 核处理器</p>
          <p>699元起</p>
        </div>
        <div>
          <div>
            <img src="../assets/st4.png">
          </div>
          <h3>小米电视4A 43英寸 标准版</h3>
          <p>全高清HDR  四核高性能处理器 </p>
          <p>1899元起</p>
        </div>
        <div>
          <div>
            <img src="../assets/st5.png">
          </div>
          <h3>小米笔记本</h3>
          <p>更轻更薄，像杂志一样随身携带</p>
          <p>3599元起</p>
        </div>
      </div>
   </div>
</template>

<script>

export default {
  name: 'nodetype',
  components:{

  },
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

<style scoped lang='scss'>
#nodetype{
  width: 1226px;
  height: 400px;
  // background: #a73;
  margin:15px 0 0 62px;
}
.top{
  width: 100%;
  height: 58px;
  // background: #429763;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow:row nowrap;
    p{
      font-size:22px;
      line-height: 16px;
    }
    div{
      width: 70px;
      height: 20px;
      border:1px solid gray;
      margin: 0 20px 0 0;
        span{
          color: #999;
          font-size: 21px;
          line-height: 20px;
        }
        span:nth-of-type(2){
          margin: 0 0 0 40px;
          width: 35px;
        }
    }
}
.bot{
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
    div{
      width: 234px;
      height: 340px;
      background: #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column nowrap;
        div{
          width: 160px;
          height: 166px;
            img{
              width: 160px;
              height: 160px;
            }
        }
        h3{
          font-size: 16px;
          margin: 40px 0 0 0;
        }
        p{
          margin: 0;
          padding: 0;
        }
        p:nth-of-type(1){
          color: #666;
          font-size: 13px;
          margin: 10px 0 0 0;
        }
        p:nth-of-type(2){
          color: orange;
        }
    }
    .one{
      border-top:2px solid #ffac13;
    }
    div:nth-of-type(2){
      border-top:2px solid #83c44e;
    }
    div:nth-of-type(3){
      border-top:2px solid #2196f3;
    }
    div:nth-of-type(4){
      border-top:2px solid #e53935;
    }
    div:nth-of-type(5){
      border-top:2px solid #00c0a5;
    }
}
</style>