const express = require("express");
const pool  = require("./pool");

var app = express();

const cors = require("cors");

app.use(cors({
  origin:[
    "http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true
}))
app.use(express.static(__dirname+"/public"));

app.listen(3000);
//首页图片轮播
app.get("/imagelist",(req,res)=>{
  var obj = [
 {id:1,img_url:"http://127.0.0.1:3000/img/banner0.png"},
 {id:2,img_url:"http://127.0.0.1:3000/img/banner1.png"},
];
  res.send(obj)
});

//商品轮播
app.get("/shoplist",(req,res)=>{
  var obj = [
 {id:1,img_url:"http://127.0.0.1:3000/img/pp.png"},
 {id:2,img_url:"http://127.0.0.1:3000/img/pp3.png"},
 {id:3,img_url:"http://127.0.0.1:3000/img/pp2.png"},
 {id:4,img_url:"http://127.0.0.1:3000/img/pp1.png"},
];
  res.send(obj)
});

//服务分页
app.get("/newslist",(req,res)=>{
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;

  var sql = " SELECT count(id) as c FROM xz_news";
  var obj = {};
  var progress = 0;
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var c = Math.ceil(result[0].c/pageSize);
    obj.pageCount = c;
    progress+=50;
    if(progress==100){
      res.send(obj)
    }
  });
  var sql = " SELECT id,title,shij,price,img_url";
    sql += " FROM xz_news";
    sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize)
    pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      obj.data = result;
      progress+=50;
      if(progress==100){
        res.send(obj)
      }
    })
})


//详情
app.get("/newsinfo",(req,res)=>{
  var obj = {title:"发表评论",content:"欢迎发表宝贵意见"};
  res.send(obj);
})

//发表评论
const qs = require("querystring")
app.post("/postcomment",(req,res)=>{
  req.on("data",(buf)=>{
    var str = buf.toString();
    var obj = JSON.parse(str);
    var msg = obj.msg;
    var nid = parseInt(obj.nid);
    var sql = "INSERT INTO xz_coment(content,user_name,ctime,nid) VALUES(?,'匿名',now(),?)";
    pool.query(sql,[msg,nid],(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:"添加成功"});
    })
  })
})
//指定商品编号的评论
app.get("/getComent",(req,res)=>{
  var nid = parseInt(req.query.id);
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;

  var sql = " SELECT count(id) as c FROM xz_coment";
      sql += " WHERE nid = ?";
  var obj = {};
  var progress = 0;
  pool.query(sql,[nid],(err,result)=>{
    if(err)throw err;
    var c = Math.ceil(result[0].c/pageSize);
    obj.pageCount = c;
    progress+=50;
    if(progress==100){
      res.send(obj)
    }
  });
  var sql = " SELECT id,content,ctime,user_name";
    sql += " FROM xz_coment";
    sql += " WHERE nid = ?"
    sql += " ORDER BY id DESC";
    sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize)
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
      if(err)throw err;
      obj.data = result;
      progress+=50;
      if(progress==100){
        res.send(obj)
      }
    })
})

//商品信息
app.get("/goodsinfo",(req,res)=>{
  var id = req.query.id;
  var obj = {id:id,title:"精选宠物口粮150kg超值装",price:140};
  res.send(obj)
})

//购物车列表数据
app.get("/shopCart",(req,res)=>{
  var obj = [];
  obj.push({id:1,title:"精选宠物口粮150kg超值装",price:140,count:2})
  obj.push({id:2,title:"精选宠物口粮150kg超值装",price:140,count:2})
  obj.push({id:3,title:"精选宠物口粮150kg超值装",price:140,count:1})
  res.send(obj);
})

//添加购物车
app.get("/addCart",(req,res)=>{
  var pid = req.query.pid;
  var count = req.query.count;
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pid)){
    res.send({code:-1,msg:"参数有误"});
    return;
  }
  if(!reg.test(count)){
    res.send({code:-2,msg:"商品数量有误"});
    return;
  }
  res.send({code:1,msg:"添加成功"})
})