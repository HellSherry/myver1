module.exports = async (req, res) => {
   const { page = '1' } = req.query
// // 1 引入
// const mysql = require('mysql');
// // 2 创建链接配置
// // mysql -hcontainers-us-west-135.railway.app -uroot -pvxfELA8Lmf3LjIe0PoK2 --port 6434 --protocol=TCP railway
// const conn = mysql.createConnection({
//     host:'containers-us-west-135.railway.app',   // 主机名 （服务器地址）
//     port:'6434',
//     user:'root',    //用户名
//     password:'vxfELA8Lmf3LjIe0PoK2',    // 密码
//     database:'railway',  // 写上自己要连接的数据库名字
// })
// // 3 建立链接

// // conn.connect(err => {
// //     if (err) throw err;
// //     console.log('mysql test  connected ')
// // });
// console.log(page)
// // 4 生成sql语句 增删改查操作
// let sql = 'select * from makemon limit '+(page-1)+',1'
// //5  执行sql语句
// conn.query(sql, (err, result) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     // 6 处理结果
//     console.log(result)
//     res.json(result[0])
// })
// 1 引入
const mysql = require('mysql2/promise');
// 2 创建链接配置
// const conn = mysql.createConnection({
//     host:'localhost',   // 主机名 （服务器地址）
//     user:'root',    //用户名
//     password:'123456',    // 密码
//     database:'javaweb',  // 写上自己要连接的数据库名字
// })
// mysql -hcontainers-us-west-207.railway.app -uroot -pxDAz1S9KXvs8LbZtXvSa --port 6923 --protocol=TCP railway
// mysql -hcontainers-us-west-33.railway.app -uroot -pUwvbgZRHUVb24IHq7a3m --port 6862 --protocol=TCP railway
const connection = await mysql.createConnection({
     host:'mysql.sqlpub.com',   // 主机名 （服务器地址）
     port:'3306',
     user:'haibara',    //用户名
     password:'190739131777d972',    // 密码
     database:'haibara',  // 写上自己要连接的数据库名字
 })

// 3 建立链接

// conn.connect(err => {
//     if (err) throw err;
//     console.log('mysql test  connected ')
// });

// // 4 生成sql语句 增删改查操作
// let sql = 'select * from ss '
// //5  执行sql语句
// conn.query(sql, (err, result) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     // 6 处理结果
//     console.log(result)
// })
const [rows, fields] = await connection.execute('select * from makemon  limit '+(page-1)+',1', []);
console.log(rows);
connection.end()
res.json(rows[0])


 
}
