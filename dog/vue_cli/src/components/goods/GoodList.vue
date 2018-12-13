<template>
    <div class="app-goodslist">
        <div class="goods-item" v-for="item in list" :key="item.id">
            <img :src="item.img" @click="getDetail(item.id)" />
            <p class="title">{{item.title}}</p>
                <p class="conta">售价:<span class="price">{{item.price}}元</span></p>
        </div>
    </div>
</template>
<script>
        export default {
        data(){
            return {
                list:[
                    {id:1,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp.png"},
                    {id:2,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp3.png"},
                    {id:3,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp2.png"},
                    {id:4,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp1.png"},
                    {id:5,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp.png"},
                    {id:6,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp3.png"},
                    {id:7,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp2.png"},
                    {id:8,title:"高级宠物口粮惊喜上市",price:"140",img:"http://127.0.0.1:3000/img/pp1.png"},

                    ]
            }
        },
        methods:{
            getDetail(id){
             this.$router.push("/home/goodsinfo/"+id);
            }
        }
    }
</script>
<style>
    .app-goodslist{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:7px;
    }
    .app-goodslist .goods-item{
        width:49%;
        border:1px solid #ccc;
        position:relative;
    }
    .app-goodslist .goods-item img{
        height:149px;
        width:100%;
    }
    .app-goodslist .goods-item .title{
        width:100%;
        height:28px;
        position:absolute;
        top:121px;
        background:#fff;
        opacity:0.88;
        color:#000;
        line-height:28px;
        padding-left:6px;
        font-size:15px;
    }
    .app-goodslist .goods-item .conta{
        color:#000;
    }
    .app-goodslist .goods-item .conta .price{
        color:red;
    }
</style>