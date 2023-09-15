import type { VercelRequest, VercelResponse } from '@vercel/node'

var aaaa={}
// 1 引入
const mysql = require('mysql');
// 2 创建链接配置
const conn = mysql.createConnection({
    host:'localhost',   // 主机名 （服务器地址）
    user:'root',    //用户名
    password:'123456',    // 密码
    database:'javaweb',  // 写上自己要连接的数据库名字
})
// 3 建立链接

// conn.connect(err => {
//     if (err) throw err;
//     console.log('mysql test  connected ')
// });

// 4 生成sql语句 增删改查操作
let sql = 'select * from makemon limit 1,1'
//5  执行sql语句
conn.query(sql, (err, result) => {
    if(err){
        console.log(err);
        return
    }
    // 6 处理结果
    console.log(result)
})

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  response.status(200).json(aaaa)
}
