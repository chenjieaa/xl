<template>
   <div  class="app-homeContainer">
      <mt-header fixed title="宠物尚门"></mt-header>

      <mt-swipe  :auto="2000">
        <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>

            <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
		                    <img src="../../img/im1.png" />
		                    <div class="mui-media-body">洗澡</div>
                </router-link>
                        </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../../img/im2.png" />
		                    <div class="mui-media-body">美容</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/im3.png" />
		                    <div class="mui-media-body">特服服务</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shop">
		                    <img src="../../img/im4.png" />
		                    <div class="mui-media-body">主题精选</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
		                    <img src="../../img/im5.png" />
		                    <div class="mui-media-body">美味零食</div>
                </router-link>
                        </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/im6.png" />
		                    <div class="mui-media-body">牵引绳</div></a></li>
		        </ul>
   </div>
</template>
<script>
  export default {
    data(){return {
      list:[]
    }},
    methods:{
      getImage(){
        var url = "http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then(result=>{
          this.list = result.body;
        })
      }
    },
    created(){
      this.getImage();
    }
  }
</script>
<style>
  .app-homeContainer header.mint-header{
    background:#EC6941;
  }
  .app-homeContainer .mint-swipe{
    height:200px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }
  .mui-grid-view.mui-grid-9{
    background:#fff;
    border:0;
  }
  .mui-grid-view.mui-grid-9 img{
    width:70px;
    height:80px;
  }
  .mui-grid-view.mui-grid-9 .mui-media-body{
    font-size:30px;
  }
</style>