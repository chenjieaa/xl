<template>
    <div class="app-shop">
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <swiper-box :list="imagelist"></swiper-box>
					</div>
				</div>
			</div>


            <div class="mui-card">
				<div class="mui-card-header">商品列表</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in cartlist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                            <span>{{item.price}}</span>
                            <span>
                            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub(item.id)">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="item.count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd(item.id)">+</button>
				</div>
                            </span>
                            </p>
						</div>
					</a>
				</li>
            </ul>
            <div>合计:{{getSubTotal}}</div>
					</div>
				</div>
			</div>     
    </div>
</template>
<script>
import swiper from "../sub/swiper.vue"
    export default{
        data(){
            return {
                imagelist:[],
                cartlist:[]
            }
        },
        methods:{
            cartSub(id){
               for(var item of this.cartlist){ 
                   if(item.id == id){
                   if(item.count < 1)return;
                    item.count--;
                    break;
                }
            }
            },
            cartAdd(id){
            for(var item of this.cartlist){
                if(item.id == id){
                    item.count++;
                    break;
                }
            }
            },
            getCartList(){
                this.$http.get("shopCart").then(result=>{
                    this.cartlist = result.body;
                })
            },
            getImageList(){
                this.$http.get("shoplist").then(result=>{
                this.imagelist = result.body;
                })
            }
        },
        created(){
            this.getImageList();
            this.getCartList();
        },
        components:{
            "swiper-box":swiper
        },
        computed:{
            getSubTotal:function(){
               var sum = 0;
               for(var item of this.cartlist){
                   sum += item.price * item.count;
               }
               return sum; 
            }
        }
    }
</script>
<style>
    
</style>