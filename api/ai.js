module.exports =async (req, res) => {
  res.setHeader('access-control-allow-origin', '*');
  const {ask} = req.query

  if (ask == null) {
    return;
  }
  const https = require('https');
  const mysql = require('mysql2');
  const connection = await mysql.createConnection({
    host: 'mysql.sqlpub.com',   // 主机名 （服务器地址）
    port: '3306',
    user: 'haibara',    //用户名
    password: '190739131777d972',    // 密码
    database: 'haibara',  // 写上自己要连接的数据库名字
  })

  await  connection.execute(
      'select * from ai where ask = ? ', [ask],
      function (err, results, fields) {
        if (err) {
          console.log('[SELECT ERROR] - ', err.message);
          return;
        }
        if (results[0] == undefined) {
          https.get('https://v1.apigpt.cn?apitype=sql&q='+ask, (response) => {
            let todo = '';

            // called when a data chunk is received.
            response.on('data', (chunk) => {
              todo += chunk;
            });

            // called when the complete response is received.
            response.on('end', async () => {
              let re=JSON.parse(todo).ChatGPT_Answer;
              await connection.execute("INSERT INTO `ai` (`ask`, `res`) VALUES (?,?); ", [ask,re]);
res.send(re)
              // console.log(JSON.parse(todo).ChatGPT_Answer);
            });

          }).on("error", (error) => {
            console.log("Error: " + error.message);
          });

        } else {
          // console.log(results[0]);
          res.send(results[0].res)
        }

        // console.log(fields);
      }
  )

}

// res.json(rows[0])

  // https.get('https://xiaoapi.cn/API/yy_sq.php?msg='+name+'&type=json&n=1', (response) => {
  //     let todo = '';
  //
  //     // called when a data chunk is received.
  //     response.on('data', (chunk) => {
  //         todo += chunk;
  //     });
  //
  //     // called when the complete response is received.
  //     response.on('end', () => {
  //       res.send(JSON.parse(todo).url);
  //     });
  //
  // }).on("error", (error) => {
  //   res.send("Error: " + error.message);
  // });
  //
  //   const { name = 'World' } = req.query

  // }


