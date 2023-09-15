module.exports = async (req, res) => {
    const mybody= req.body

 // 1 引入
 const mysql = require('mysql2/promise');
const connection = await mysql.createConnection({
     host:'containers-us-west-207.railway.app',   // 主机名 （服务器地址）
     port:'6923',
     user:'root',    //用户名
     password:'xDAz1S9KXvs8LbZtXvSa',    // 密码
     database:'railway',  // 写上自己要连接的数据库名字
 })
 
 // 3 建立链接

//  const [rows, fields] = await connection.execute('select * from makemon limit '+(page-1)+',1', []);
const resul= await connection.execute("UPDATE `makemon` SET `question` = '"+mybody.question+"', `answer1` = '"+mybody.answer1+"', `answer2` = '"+mybody.answer2+"', `answer3` = '"+mybody.answer3+"', `answer4` = '"+mybody.answer4+"', `answer5` = '"+mybody.answer5+"', `answer6` = '"+mybody.answer6+"', `ranswer` = '"+mybody.ranswer+"', `parse` = '"+mybody.parse+"' where  `ttime` = '"+mybody.ttime+"' ");
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