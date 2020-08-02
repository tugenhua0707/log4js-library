
const Koa = require('koa');
const app = new Koa();
const LogJS = require('./log4jsConfig/log4');

// log4.js 引入
app.use(LogJS());

app.listen(3000, () => {
  console.log('http://localhost:3000 is start');
});
