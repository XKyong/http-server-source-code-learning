// https://nodejs.org/dist/latest-v18.x/docs/api/url.html
const url = require('node:url');

const testUrl = 'https://www.bing.com:1443/search?q=%E6%88%91%E4%BB%AC%E7%9A%84%E6%98%8E%E5%A4%A9&PC=U316&FORM=CHROMN';

const myUrl = new url.URL(testUrl);

console.log('解析后的 myUrl: ', myUrl);
console.log('解析后的 searchParams: ', myUrl.searchParams); // URLSearchParams { 'q' => '我们的明天', 'PC' => 'U316', 'FORM' => 'CHROMN' }
console.log('解析后的 searchParams q: ', myUrl.searchParams.get('q')); // 我们的明天
console.log('解析后的 searchParams q all: ', myUrl.searchParams.getAll('q')); // [ '我们的明天' ]


