// he: 即 html 实体，是一个用 JavaScript 编写的强大的 HTML 实体编码器/解码器
// 能够将特殊符号进行编码和解码，使之能够在浏览器中正常显示出来！
// npm地址：https://www.npmjs.com/package/he
// 在线示例网站：https://mothereff.in/html-entities
const he = require('he');

console.log(he.encode('foo © bar ≠ baz 𝌆 qux'));
// → 'foo &#xA9; bar &#x2260; baz &#x1D306; qux'
// 转换后的这个字符串，能在浏览器中正常把 encode 前的字符正常显示出来！
