const union = require('union');

const server = union.createServer({
  before: [
    // 这里的 req 和 res 形参接受到的值，跟 http.createServer 回调函数接受到的 req 和 res 是一样的！
    function (req, res) {
      console.log('middleware 1 start', req.url);
      res.emit('next');
      console.log('middleware 1 end');
    },
    function (req, res) {
      console.log('middleware 2 start', req.url);
      res.emit('next');
      console.log('middleware 2 end');
    },
    function (req, res) {
      console.log('middleware 3 start', req.url);
      res.emit('next');
      console.log('middleware 3 end');
    },
    function (req, res) {
      res.end('Hello from Union!\n');

      res.emit('next');
    }
  ]
});

server.listen(3000, () => {
  console.log('the union server is running on http://localhost:3000');
});

// 访问启动链接，输出：
// middleware 1 start
// middleware 2 start
// middleware 3 start
// middleware 3 end
// middleware 2 end
// middleware 1 end
