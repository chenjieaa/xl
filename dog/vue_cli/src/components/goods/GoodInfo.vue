<template>
    <div class="app-goodinfo">
    <!--轮播-->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <swiper-box :list="imglist"></swiper-box>
					</div>
				</div>
			</div>
    <!--购买-->
    <p class="title">{{info.title}}</p>
    <p class="price">单价: <span class="prices">{{info.price}}元</span></p>
     <p>购买数量:</p>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" v-model="val"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
				</div>
    <div class="button"> 
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addCartTo">加入购物车</mt-button>
    </div>

    <div class="xq">
        <p>商品详情</p>
        <img src="http://127.0.0.1:3000/img/dog.png" />
    </div>
    </div>
</template>
<script>
import swiper from "../sub/swiper.vue"
 import {Toast} from "mint-ui"
    export default {
        data(){
            return {
                imglist:[],
                val:1,
                info:{}
            }
        },
        methods:{
            addCartTo(){
            var id = this.$route.params.id
            var count = this.val;
            this.$http.get("addCart?pid="+id+"&count="+count).then(result=>{
                if(result.body.code == 1){
                    this.$store.commit("increment",count)
                    Toast(result.body.msg)
                }else{
                    Toast(result.body.msg)
                }
            })

            },
            getGoodInfo(){
                var id = this.$route.params.id;
                this.$http.get("goodsinfo?id="+id).then(result=>{
                    this.info = result.body;
                })
            },
            goodAdd(){
                if(this.val<=998){this.val++;}
            },
            goodSub(){
                if(this.val>1){this.val--;}
            },
            getImageList(){
                this.$http.get("shoplist").then(result=>{
                    this.imglist = result.body;
                })
            }
        },
        created() {
            this.getImageList();
            this.getGoodInfo();
        },
        components:{
            "swiper-box":swiper
        }
    }
</script>
<style>
.app-goodinfo .title,.price,.shuliang{
    width:100%;
    height:30px;
    background:#fff;
    font-size:16px;
    color:#000;
    line-height:30px;
    padding-left:20px;
}
.app-goodinfo .price .prices{
    color:red;
}
.app-goodinfo .button{
    width:100%;
    text-align:right;
    margin-top:20px;
}
.app-goodinfo .xq img{
    width:100%;
    height:200px;
}
</style>