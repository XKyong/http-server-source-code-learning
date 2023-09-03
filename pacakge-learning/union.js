const union = require('union');

const server = union.createServer({
  before: [
    // 这里的 req 和 res 形参接受到的值，跟 http.createServer 回调函数接受到的 req 和 res 是一样的！
    // function (req, res) {
    //   console.log('middleware 1 start', req.url);
    //   res.emit('next');
    //   console.log('middleware 1 end');
    // },
    // function (req, res) {
    //   console.log('middleware 2 start', req.url);
    //   res.emit('next');
    //   console.log('middleware 2 end');
    // },
    // function (req, res) {
    //   console.log('middleware 3 start', req.url);
    //   res.emit('next');
    //   console.log('middleware 3 end');
    // },
    // function (req, res) {
    //   res.end('Hello from Union!\n');

    //   res.emit('next');
    // }
    // ----------------------异步函数---------------------------------
    async function (req, res) {
      console.log('middleware 1 start', req.url);
      await res.emit('next');
      console.log('middleware 1 end');
    },
    async function (req, res) {
      console.log('middleware 2 start', req.url);
      await res.emit('next');
      console.log('middleware 2 end');
    },
    async function (req, res) {
      const data = await new Promise((resolve) => {
        setTimeout(() => resolve('middleware 3 start'), 2000);
      });
      console.log(data);
      await res.emit('next');
      console.log('middleware 3 end');
    },
    async function (req, res) {
      res.end('Hello from Union!\n');

      await res.emit('next');
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

// 如果使用的是 异步函数，则输出的结果为：
// middleware 1 start
// middleware 2 start
// middleware 2 end
// middleware 1 end
// middleware 3 start
// middleware 3 end

// 如此说明一个问题，union 的中间件设计也是不支持异步函数的，这跟 express 中的中间件机制是一样的！
// 相反地，Koa 的中间件机制是支持异步函数的！
