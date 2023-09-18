module.exports = (req, res) => {
 res.setHeader('access-control-allow-origin','*');
  const { name = 'World' } = req.query
  const https = require('https');

  https.get('https://xiaoapi.cn/API/yy_sq.php?msg='+name+'&type=json&n=1', (response) => {
      let todo = '';
  
      // called when a data chunk is received.
      response.on('data', (chunk) => {
          todo += chunk;
      });
  
      // called when the complete response is received.
      response.on('end', () => {
        res.send(JSON.parse(todo).url);
      });
  
  }).on("error", (error) => {
    res.send("Error: " + error.message);
  });
  
    // const { name = 'World' } = req.query
   
  }
