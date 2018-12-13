<template>
    <div class="app-comment">
     <hr />
     <textarea placeholder="欢迎提供宝贵意见" maxlength="120" v-model="msg" class="textarea"></textarea>
     <mt-button size="large" @click="postComment">发表评论</mt-button>
     <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in list" :key="item.id">
            <div class="cmt-info">{{i+1}}楼 用户:{{item.user_name}} 发表时间:2018-05-14</div>
            <div class="cmt-body">
                {{item.content}}
            </div>
        </div>
     </div>
     <mt-button size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data(){
            return {
                msg:"",
                pageIndex:0,
                pageSize:5,
                list:[]
            }
        },
        created() {
            this.getMore();
        },
        methods:{
            getMore(){
                this.pageIndex++;
                var p = this.pageIndex;
                var s = this.pageSize;
                var id = this.id;
                var url = "getComent?id="+id+"&pno="+p+"&pageSize="+s;
                this.$http.get(url).then(result=>{
                    var row = this.list.concat(result.body.data)
                    this.list = row;
                })
            },
            postComment(){
            var nid = this.id;
            var pmsg = this.msg;
            if(pmsg.trim().length==0){
            Toast("评论内容不能为空")
            return;
            }
            var url = "http://127.0.0.1:3000/postcomment";
            this.$http.post(url,{nid:nid,msg:pmsg}).then(result=>{
                Toast("发表成功")
                this.pageIndex = 0;
                this.list = [];
                var t = document.querySelector(".textarea");
                console.log(t);
                this.t.innerHTML = "";
                this.getMore();
                
            })
            }
        },
        props:["id"]
    }
</script>
<style>
    .app-comment textarea{
        font-size:14px;
        height:85px;
        margin:0;
    }
    .app-comment .cmt-list{
        margin:5px 0;
    }
    .app-comment .cmt-list .cmt-info{
        line-height:30px;
        background:#ccc;
    }
    .app-comment .cmt-list .cmt-body{
        line-height:35px;
        text-indent:2em;
    }

</style>