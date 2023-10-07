module.exports = async (req, res) => {
    const mybody= req.body

 // 1 引入
 const mysql = require('mysql2/promise');
const connection = await mysql.createConnection({
     host:'mysql.sqlpub.com',   // 主机名 （服务器地址）
     port:'3306',
     user:'haibara',    //用户名
     password:'190739131777d972',    // 密码
     database:'haibara',  // 写上自己要连接的数据库名字
 })
 
 // 3 建立链接

//  const [rows, fields] = await connection.execute('select * from makemon limit '+(page-1)+',1', []);
const resul= await connection.execute("UPDATE `makemon` SET `question` = ?, `answer1` = ?, `answer2` =?, `answer3` = ?, `answer4` = ?, `answer5` = ?, `answer6` = ?, `ranswer` = ?, `parse` = ? where  `ttime` = ? ",[mybody.question, mybody.answer1 ,mybody.answer2,mybody.answer3,mybody.answer4,mybody.answer5,mybody.answer6,mybody.ranswer,mybody.parse,mybody.ttime]);
    // 
console.log(resul)
 connection.end()
 console.log(resul[0])
 console.log(resul[0])
 if(resul[0].affectedRows>0){
    console.log(1)
     res.send(resul[0].info)
 }else{
    console.log(2)
    res.send("false")
 }

  
 }
