USE xm;
CREATE TABLE xz_news(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(128),
 shij VARCHAR(128),
 price VARCHAR(10),
 img_url VARCHAR(255)
);
INSERT INTO xz_news VALUES(null,'医疗服务','60分钟','60元',"http://127.0.0.1:3000/img/dog.png");
INSERT INTO xz_news VALUES(null,'洗澡服务','60分钟','60元',"http://127.0.0.1:3000/img/dog.png");
INSERT INTO xz_news VALUES(null,'哈士奇','60分钟','60元',"http://127.0.0.1:3000/img/dog.png");
INSERT INTO xz_news VALUES(null,'医疗服务','60分钟','60元',"http://127.0.0.1:3000/img/dog.png");
INSERT INTO xz_news VALUES(null,'洗澡服务','60分钟','60元',"http://127.0.0.1:3000/img/dog.png");

CREATE TABLE xz_coment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(140),
    ctime DATETIME,
    user_name VARCHAR(50),
    nid INT
);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);
INSERT INTO xz_coment VALUES(null,"ha45ha",now(),'匿名',1);



CREATE TABLE xz_user2(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO xz_user2 VALUES(null,1355658922,md5('123'));
INSERT INTO xz_user2 VALUES(null,12456,md5('123'));
INSERT INTO xz_user2 VALUES(null,561684,md5('123'));
