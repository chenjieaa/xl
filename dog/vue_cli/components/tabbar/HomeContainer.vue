<template>
   <div  class="app-homeContainer">
      <!--顶部导航条 1：-->
      <mt-header fixed title="学子商城"></mt-header>
      <!--轮播图    2：-->
      <mt-swipe  :auto="2000">
        <mt-swipe-item>
           <img src="http://cdn.tmooc.cn/bsfile//imgad///04051D4B06C247C78C1C886975BFA067.png" />
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="http://cdn.tmooc.cn/bsfile//imgad///0ED43FA791D7449F995FE1A42C0E4518.png" />
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="http://cdn.tmooc.cn/tmooc-web/imgad/2018/8/9//BE919D59A05D444FA7AC52490A833EB9.png" />
        </mt-swipe-item>


      </mt-swipe>
      <!--六宫格    3：-->
            
   </div>
</template>
<script>
  export default {
    data(){return {}}
  }
</script>
<style>
  /*自定义组件的样式*/
  .app-homeContainer header.mint-header{
    /*background-color:yellow;*/
    /*color:red;*/
  }
  /*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:200px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }
</style>