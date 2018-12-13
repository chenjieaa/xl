<template>
<div class="app-newslist">
    <div class="top-fixed"> <input type="search" placeholder="请输入服务项目"> <button class="button2">确定</button> </div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
				<router-link :to="'/home/newinfo?id='+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">{{item.title}}
							<p class='mui-ellipsis'>服务时间:<span class="span1">{{item.shij}}</span></p>
                            <p class='mui-ellipsis'>服务价格:¥<span class="span1">{{item.price}}</span></p>
						</div>
					</router-link>
				</li>
    </ul>
    <mt-button type="primary" size="large" @click="getMore" class="button1">加载更多</mt-button>
</div>

</template>
<script>
  export default{
      data(){
          return {
              list:[],
              pageIndex:0,
              pageSize:3,
              hasMore:true,
              pageCount:4
          }
      },
      methods:{
          getMore(){
              this.pageIndex++;
              this.hasMore = this.pageIndex <= this.pageCount;
              if(!this.hasMore){return}
              var url = "http://127.0.0.1:3000/newslist";
              url+="?pno="+this.pageIndex+"&pageSize="+this.pageSize;
            this.$http.get(url).then(result=>{
                var rows = this.list.concat(result.body.data)
                this.list = rows;
            })
          }
      },
      created() {
        this.getMore();
      },
  }

</script>
<style>
.app-newslist .mui-table-view .mui-media-body{
    font-size:15px;
    color:#000;
}
.app-newslist .mui-table-view .mui-ellipsis .span1{
    color:#EC6941;
}
.app-newslist .button1{
    background:#bbb;
}
.app-newslist .top-fixed{
    width:100%;
    height:40px;
    background:#EC6941;
    position:fixed;
    top:0;
    left:0;
    z-index:1;
}
.app-newslist .top-fixed input{
    background:#fff;
    margin-top:5px;
    margin-left:10px;
    width:300px;
    height:30px;
}
.app-newslist .top-fixed .button2{
    text-align:center;
    line-height:15px;
    height:27px;
    margin-left:5px;
    margin-top:6px;
}

</style>