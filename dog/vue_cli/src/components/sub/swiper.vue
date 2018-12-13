<template>
    <div class="app-subswipe">
       <mt-swipe :auto="2500">
        <mt-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.img_url" />
        </mt-swipe-item>
       </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        props:["list"]
    }
</script>
<style>
   .app-subswipe .mint-swipe{
   height:200px;
 }
 .app-subswipe .mint-swipe img{
   width:100%;
 } 
</style>