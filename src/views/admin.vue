<template>
   <div id="admin">
    <header class="head">
      <div class="imgs"></div>
      <headers></headers>
      <logobanner></logobanner>
    </header>
    <section  class="center">
      <asides></asides>
      <nodetype></nodetype>
    </section>
    <footer  class="foot">
      <Navbar></Navbar>
    </footer>
   </div>
</template>

<script>
import headers from '../components/headers'
import logobanner from '../components/logobanner'
import asides from '../components/asides'
import nodetype from '../components/nodetype'
import Navbar from '../components/navbar'
export default {
  name: 'admin',
  components:{
    headers,
    logobanner,
    asides,
    nodetype,
    Navbar
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

<style scoped>
#admin{
  width: 1349px;
  height: 1480px;
  margin: 0 auto;
  /*background: red;*/
}
#admin .head{
  width: 100%;
  height: 260px;
  /*background: blue;*/
}
#admin .head .imgs{
  background: url(../assets/cm.jpg);
  background-size:cover; 
  background-position: -550px 0px;
  width: 100%;
  height: 120px;
}
#admin .center{
  width: 100%;
  height: 1055px;
  /*background: orange;*/
}
#admin .foot{
  width: 100%;
  height: 166px;
  /*background: yellow;*/
}
</style>